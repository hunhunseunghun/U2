const RetryHandler = function() {
    this.interval = 1000; // Start at one second
    this.maxInterval = 60 * 1000; // Don't wait longer than a minute
};


const MediaUploader = function(options) {
    var noop = function() {};
    this.file = options.file;
    this.contentType = options.contentType || this.file.type || 'application/octet-stream';
    this.metadata = options.metadata || {
        'title': this.file.name,
        'mimeType': this.contentType
    };
    this.token = options.token;
    this.onComplete = options.onComplete || noop;
    this.onProgress = options.onProgress || noop;
    this.onError = options.onError || noop;
    this.offset = options.offset || 0;
    this.chunkSize = options.chunkSize || 0;
    this.retryHandler = new RetryHandler();

    this.url = options.url;
    if (!this.url) {
        var params = options.params || {};
        params.uploadType = 'resumable';
        this.url = this.buildUrl_(options.fileId, params, options.baseUrl);
    }
    this.httpMethod = options.fileId ? 'PUT' : 'POST';
};

/**
 * Initiate the upload.
 */
MediaUploader.prototype.upload = function() {
    var self = this;
    var xhr = new XMLHttpRequest();

    xhr.open(this.httpMethod, this.url, true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Upload-Content-Length', this.file.size);
    xhr.setRequestHeader('X-Upload-Content-Type', this.contentType);

    xhr.onload = function(e) {
        if (e.target.status < 400) {
            var location = e.target.getResponseHeader('Location');
            this.url = location;
            this.sendFile_();
        } else {
            this.onUploadError_(e);
        }
    }.bind(this);
    xhr.onerror = this.onUploadError_.bind(this);
    xhr.send(JSON.stringify(this.metadata));
};

/**
 * Send the actual file content.
 *
 * @private
 */
MediaUploader.prototype.sendFile_ = function() {
    var content = this.file;
    var end = this.file.size;

    if (this.offset || this.chunkSize) {
        // Only bother to slice the file if we're either resuming or uploading in chunks
        if (this.chunkSize) {
            end = Math.min(this.offset + this.chunkSize, this.file.size);
        }
        content = content.slice(this.offset, end);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', this.url, true);
    xhr.setRequestHeader('Content-Type', this.contentType);
    xhr.setRequestHeader('Content-Range', 'bytes ' + this.offset + '-' + (end - 1) + '/' + this.file.size);
    xhr.setRequestHeader('X-Upload-Content-Type', this.file.type);
    if (xhr.upload) {
        xhr.upload.addEventListener('progress', this.onProgress);
    }
    xhr.onload = this.onContentUploadSuccess_.bind(this);
    xhr.onerror = this.onContentUploadError_.bind(this);
    xhr.send(content);
};

/**
 * Query for the state of the file for resumption.
 *
 * @private
 */
MediaUploader.prototype.resume_ = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', this.url, true);
    xhr.setRequestHeader('Content-Range', 'bytes */' + this.file.size);
    xhr.setRequestHeader('X-Upload-Content-Type', this.file.type);
    if (xhr.upload) {
        xhr.upload.addEventListener('progress', this.onProgress);
    }
    xhr.onload = this.onContentUploadSuccess_.bind(this);
    xhr.onerror = this.onContentUploadError_.bind(this);
    xhr.send();
};

/**
 * Extract the last saved range if available in the request.
 *
 * @param {XMLHttpRequest} xhr Request object
 */
MediaUploader.prototype.extractRange_ = function(xhr) {
    var range = xhr.getResponseHeader('Range');
    if (range) {
        this.offset = parseInt(range.match(/\d+/g).pop(), 10) + 1;
    }
};

/**
 * Handle successful responses for uploads. Depending on the context,
 * may continue with uploading the next chunk of the file or, if complete,
 * invokes the caller's callback.
 *
 * @private
 * @param {object} e XHR event
 */
MediaUploader.prototype.onContentUploadSuccess_ = function(e) {
    if (e.target.status == 200 || e.target.status == 201) {
        this.onComplete(e.target.response);
    } else if (e.target.status == 308) {
        this.extractRange_(e.target);
        this.retryHandler.reset();
        this.sendFile_();
    }
};

/**
 * Handles errors for uploads. Either retries or aborts depending
 * on the error.
 *
 * @private
 * @param {object} e XHR event
 */
MediaUploader.prototype.onContentUploadError_ = function(e) {
    if (e.target.status && e.target.status < 500) {
        this.onError(e.target.response);
    } else {
        this.retryHandler.retry(this.resume_.bind(this));
    }
};

/**
 * Handles errors for the initial request.
 *
 * @private
 * @param {object} e XHR event
 */
MediaUploader.prototype.onUploadError_ = function(e) {
    this.onError(e.target.response); // TODO - Retries for initial upload
};

/**
 * Construct a query string from a hash/object
 *
 * @private
 * @param {object} [params] Key/value pairs for query string
 * @return {string} query string
 */
MediaUploader.prototype.buildQuery_ = function(params) {
    params = params || {};
    return Object.keys(params).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
};

/**
 * Build the drive upload URL
 *
 * @private
 * @param {string} [id] File ID if replacing
 * @param {object} [params] Query parameters
 * @return {string} URL
 */
MediaUploader.prototype.buildUrl_ = function(id, params, baseUrl) {
    var url = baseUrl;
    if (id) {
        url += id;
    }
    var query = this.buildQuery_(params);
    if (query) {
        url += '?' + query;
    }
    return url;
};

export {MediaUploader};

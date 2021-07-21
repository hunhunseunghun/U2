//상용
//const HOST_URL = 'https://u2.life';
//const API_URL = 'https://api.u2.life/api';
//const IMG_URL = 'https://admin.u2.life/upload';

// //개발
// const HOST_URL = 'https://web-test.u2.life';
// const API_URL = 'https://api-test.u2.life/api';
// const IMG_URL = 'https://admin-test.u2.life/upload';

//환경변수
const HOST_URL = process.env.REACT_APP_HOST_URL;
const API_URL = process.env.REACT_APP_API_URL;
const IMG_URL = process.env.REACT_APP_IMG_URL;

export { HOST_URL, API_URL, IMG_URL };

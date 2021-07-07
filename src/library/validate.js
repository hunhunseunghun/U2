export function validateEmail(input) {
	let result = {
		isValid: true,
		error: '',
	};

	if (!input) {
		result.isValid = false;
		result.error = '이메일 주소를 입력해주세요.';
	}

	if (typeof input !== 'undefined') {
		var pattern = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
		);
		if (!pattern.test(input)) {
			result.isValid = false;
			result.error = '정확한 이메일 주소를 입력해주세요.';
		}
	}
	return result;
}

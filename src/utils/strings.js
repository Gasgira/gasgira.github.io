export const dashEncodeURIComponent = (string) => {
	try {
		if (!string || typeof string !== 'string') return '';
		if (!string.includes(' ')) return encodeURIComponent(string);
		return encodeURIComponent(string.replaceAll(' ', '-'));
	} catch (error) {
		return encodeURIComponent(string);
	}
}

export const dashDecodeURIComponent = (string) => {
	try {
		if (!string || typeof string !== 'string') return '';
		if (!string.includes('-')) return decodeURIComponent(string);
		return decodeURIComponent(string.replaceAll('-', ' '));
	} catch (error) {
		return decodeURIComponent(string);
	}
}
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

export const nanoid = (t = 21) => {
	let e = "",
		r = crypto.getRandomValues(new Uint8Array(t));
	for (; t--;) {
		let n = 63 & r[t];
		e += n < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n < 63 ? "_" : "-"
	}
	return e
};

const alphabet = '1234567890abcdef';
export const nanohash = () => {
	let id = ''
	let i = 8
	while (i--) {
		id += alphabet[(Math.random() * alphabet.length) | 0]
	}
	return id
}
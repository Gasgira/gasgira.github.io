const STATIC_ROOT = process.env.STATIC_ROOT;
const VANITY_BETA = process.env.VANITY_BETA === 'true' ? true : false;

export {
	STATIC_ROOT,
	VANITY_BETA
}
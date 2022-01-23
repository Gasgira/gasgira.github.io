import hyperHTML from 'hyperhtml';
hyperHTML.placeholders = {
	
};
export const HTML = hyperHTML;
export const { wire, bind } = hyperHTML;
export const html = (...args) => hyperHTML.wire()(...args);
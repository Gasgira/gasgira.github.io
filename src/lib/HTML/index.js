import hyperHTML from 'hyperhtml';
hyperHTML.placeholders = {
	
};
export const HTML = hyperHTML;
export const { wire, bind } = hyperHTML;
export const html = (...args) => hyperHTML.wire()(...args);

export const throbber = HTML.wire()`
	<svg class="placeholder_throbber" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 256" preserveAspectRatio="xMidYMid meet" width="100%" height="32px">
		<defs>
				<style>
				</style>
		</defs>
		<circle class="loading_dot" cx="32" cy="32" r="32" style="animation-delay:0s" />
		<circle class="loading_dot" cx="32" cy="32" r="32" style="animation-delay:.4s" />
		<circle class="loading_dot" cx="32" cy="32" r="32" style="animation-delay:.8s" />
	</svg>
`;
import { mixMembers } from 'stencil-awesome-test';

import type { FormProps } from '../../../schema';
import { KolIndentedTextTag } from '../../../core/component-names';
export const getFormHtml = (props: FormProps): string => {
	props = mixMembers({ ...props }, props);
	return `<kol-form class="kol-form">
	<mock:shadow-root>
		<form autocomplete="off" method="post" novalidate="">
			<p>
			<${KolIndentedTextTag}>${
				typeof props._requiredText === 'string' ? props._requiredText : 'Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.'
			}</${KolIndentedTextTag}>
			</p>
			<slot />
		</form>
  </mock:shadow-root>
</kol-form>`;
};

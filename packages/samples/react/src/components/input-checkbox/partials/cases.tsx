import React, { forwardRef } from 'react';

import { KolInputCheckbox } from '@public-ui/react';

import { ERROR_MSG } from '../../../shares/constants';

import type { Components } from '@public-ui/components';
export const InputCheckboxCases = forwardRef<HTMLKolInputCheckboxElement, Components.KolInputCheckbox>(function InputCheckboxCases(props, ref) {
	return (
		<div className="grid gap-4">
			<KolInputCheckbox {...props} _label="Nicht ausgewählt" _value={false} _required />
			<KolInputCheckbox {...props} _label="Unbestimmt (Indeterminate)" _value={null} _indeterminate />
			<KolInputCheckbox {...props} ref={ref} _accessKey="A" _checked _label="Ausgewählt" _tooltipAlign="right" _value={true} />
			<KolInputCheckbox
				{...props}
				_checked
				_icons={{ unchecked: 'codicon codicon-close' }}
				_label={'Mit sehr langem Label und Umbrüchen '.repeat(5)}
				_value={true}
			/>
			<KolInputCheckbox {...props} _disabled _label="Disabled" _value={true} _hint="Hint text" />
			<KolInputCheckbox {...props} _checked _disabled _label="Checked and disabled" />
			<KolInputCheckbox {...props} _indeterminate _disabled _label="Indeterminate and disabled" />
			<KolInputCheckbox {...props} _msg={{ _type: 'error', _description: ERROR_MSG }} _label="Mit Fehler" _touched _value={true} _hint="Hint text" />
		</div>
	);
});

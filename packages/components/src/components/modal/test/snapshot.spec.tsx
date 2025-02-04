import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { getModalHtml } from './html.mock';

import type { SpecPage } from '@stencil/core/testing';
import type { ModalProps } from '../../../schema';
import { KolModal } from '../shadow';

executeTests<ModalProps>(
	'Modal',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: [KolModal],
			template: () => <kol-modal {...props} />,
		});
		return page;
	},
	{
		_label: ['Label'],
		_width: ['80%'],
	},
	getModalHtml,
	{
		execMode: 'default', // ready
	},
);

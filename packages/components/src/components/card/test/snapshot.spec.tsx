import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { getCardHtml } from './html.mock';

import type { SpecPage } from '@stencil/core/testing';
import type { CardProps } from '../../../schema';
import { KolCard } from '../shadow';

executeTests<CardProps>(
	'Card',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: [KolCard],
			template: () => <kol-card {...props} />,
		});
		return page;
	},
	{
		_hasCloser: [false, true],
		_label: ['Überschrift'],
		_level: [1, 2, 3, 4, 5, 6],
	},
	getCardHtml,
	{
		execMode: 'default', // ready
	},
);

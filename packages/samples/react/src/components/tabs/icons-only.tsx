import type { FC } from 'react';
import React from 'react';

import { KolTabs } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';

const tabs = [
	{
		_icons: 'codicon codicon-pie-chart',
		_label: 'Erster Tab',
		_hideLabel: true,
	},
	{
		_icons: 'codicon codicon-calendar',
		_label: 'Zweites Tab',
		_hideLabel: true,
	},
	{
		_disabled: true,
		_icons: 'codicon codicon-briefcase',
		_label: 'Deaktiviertes Tab',
		_hideLabel: true,
	},
	{
		_icons: 'codicon codicon-telescope',
		_label: 'Letzter Tab',
		_hideLabel: true,
	},
];
export const TabsIconsOnly: FC = () => (
	<>
		<SampleDescription>
			<p>Hier sind verschiedene Varianten von Tabs mit Icons. Nur der Inhalt eines Tabs wird gleichzeitig angezeigt.</p>
		</SampleDescription>

		<KolTabs _label="Tabs with icons" _tabs={tabs}>
			<div slot="tab-0">Inhalte von Tab 1</div>
			<div slot="tab-1">Inhalte von Tab 2</div>
			<div slot="tab-2">Inhalte von Tab 3</div>
			<div slot="tab-3">Inhalte von Tab 4</div>
		</KolTabs>
	</>
);

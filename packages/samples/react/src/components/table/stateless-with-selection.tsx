import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import { KolTableStateless } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';
import type { KoliBriTableSelection } from '@public-ui/components';

const DATA = [
	{ id: '1001', name: 'Foo Bar' },
	{ id: '1002', name: 'Foo Baz' },
];
type Data = (typeof DATA)[0];

export const TableStatelessWithSelection: FC = () => {
	const selection: KoliBriTableSelection = {
		label: (row) => `Selection for ${(row as Data).name}`,
		selectedKeys: ['1002'],
		keyPropertyName: 'id',
	};

	const kolTableStatelessRef = useRef<HTMLKolTableStatelessElement>(null);

	const handleSelectionChangeEvent = ({ detail: selection }: { detail: string[] }) => {
		console.log('Selection change via event', selection);
	};
	const handleSelectionChangeCallback = (_event: Event, selection: string[]) => {
		console.log('Selection change via callback', selection);
	};

	useEffect(() => {
		// @ts-expect-error https://github.com/Microsoft/TypeScript/issues/28357
		kolTableStatelessRef.current?.addEventListener('kol-selection-change', handleSelectionChangeEvent);

		return () => {
			// @ts-expect-error https://github.com/Microsoft/TypeScript/issues/28357
			kolTableStatelessRef.current?.removeEventListener('kol-selection-change', handleSelectionChangeEvent);
		};
	}, [kolTableStatelessRef]);

	return (
		<>
			<SampleDescription>KolTableStateless with selection</SampleDescription>

			<KolTableStateless
				_label="Table with selection checkboxes"
				_headerCells={{
					horizontal: [
						[
							{ key: 'id', label: '#ID', textAlign: 'left' },
							{ key: 'name', label: 'Name', textAlign: 'left' },
						],
					],
				}}
				_data={DATA}
				_selection={selection}
				_on={{ onSelectionChange: handleSelectionChangeCallback }}
				className="block"
				style={{ maxWidth: '600px' }}
				ref={kolTableStatelessRef}
			/>
		</>
	);
};

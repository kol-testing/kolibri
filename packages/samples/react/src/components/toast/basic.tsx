import React, { useEffect } from 'react';

import { ToasterService } from '@public-ui/components';
import { KolButton } from '@public-ui/react';

import { getRoot } from '../../shares/react-roots';
import { SampleDescription } from '../SampleDescription';

import type { FC } from 'react';

export const ToastBasic: FC = () => {
	const toaster = ToasterService.getInstance(document);

	useEffect(() => {
		async function createNotification() {
			await toaster.enqueue({
				label: 'Fehler',
				type: 'error',
				description: `Eine Fehlermeldung ${new Date().getTime()}`,
			});
		}
		void createNotification();

		return () => {
			toaster.closeAll();
		};
	}, []);

	const handleButtonClickSimple = () => {
		void toaster.enqueue({
			description: 'Toasty',
			label: `Initial Toast`,
			type: 'warning',
		});
	};

	const handleButtonClickVariantMessage = () => {
		void toaster.enqueue({
			description: 'Toasty',
			label: `Toast with variant 'msg'`,
			type: 'warning',
			alertVariant: 'msg',
		});
	};

	const handleButtonClickComplex = () => {
		void toaster.enqueue({
			render: (element: HTMLElement, { close }) => {
				getRoot(element).render(
					<>
						<KolButton
							_label={'Hello World from Toast!'}
							_on={{
								onClick: () => {
									console.log('Toast Button clicked!');
									close();
								},
							}}
						/>
					</>,
				);
			},
			label: `Initial Toast`,
			type: 'warning',
		});
	};

	const handleButtonClickOpenAndClose = async () => {
		const close = await toaster.enqueue({
			description: 'I will disappear in two seconds...',
			label: `Good Bye`,
			type: 'warning',
		});

		if (close) {
			setTimeout(close, 2000);
		}
	};

	const closeAll = () => {
		toaster.closeAll();
	};

	return (
		<>
			<SampleDescription>
				<p>Hier ist ein Beispiel für verschiedene Toasts, die beim anklicken verschiedene Popups generieren. Der untere schließt alle geöffneten Toasts.</p>
			</SampleDescription>
			<div>
				<KolButton _label="Show simple toast" _on={{ onClick: handleButtonClickSimple }}></KolButton>{' '}
				<KolButton _label="Show toast with alert variant 'msg'" _on={{ onClick: handleButtonClickVariantMessage }}></KolButton>{' '}
				<KolButton _label="Show complex toast" _on={{ onClick: handleButtonClickComplex }}></KolButton>
				<br />
				<br />
				<KolButton _label="Show toast and close after 2 seconds" _on={{ onClick: () => void handleButtonClickOpenAndClose() }}></KolButton>
				<br />
				<br />
				<KolButton _label="Close all toasts" _on={{ onClick: closeAll }}></KolButton>
			</div>
		</>
	);
};

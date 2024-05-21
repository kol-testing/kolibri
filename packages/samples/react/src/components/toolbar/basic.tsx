import type { FC } from 'react';
import React, { useContext } from 'react';
import { KolBadge, KolToolbar } from '@public-ui/react';
import { HideMenusContext } from '../../shares/HideMenusContext';

export const ToolbarBasic: FC = () => {
	const hideMenus = useContext(HideMenusContext);
	return (
		<>
			{!hideMenus && <KolBadge className="block mb-3" _label="Component is a DRAFT - Don't use in production yet." _color="#db5461" />}
			<KolToolbar
				class="block w-fit"
				_label="Toolbar"
				_items={[
					{
						_label: "Button",
					},
					{
						_href: "#",
						_label: "Simple Link 1"
					},
					{
						_label: "Button",
					},
					{
						_href: "#",
						_label: "Simple Link 3"
					},
				]}
			/>
		</>
	);
};

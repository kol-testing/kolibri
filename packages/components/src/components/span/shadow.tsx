import type { AccessKeyPropType, KoliBriIconsProp, LabelWithExpertSlotPropType, SpanProps, Stringified } from '../../schema';
import type { JSX } from '@stencil/core';
import { Component, h, Prop } from '@stencil/core';
import { KolSpanWcTag } from '../../core/component-names';

/**
 * @internal
 */
@Component({
	tag: 'kol-span',
	styleUrls: {
		default: './style.scss',
	},
	shadow: true,
})
export class KolSpan implements SpanProps {
	public render(): JSX.Element {
		return (
			<KolSpanWcTag _icons={this._icons} _hideLabel={this._hideLabel} _label={this._label} _accessKey={this._accessKey} class="kol-span">
				<slot name="expert" slot="expert"></slot>
			</KolSpanWcTag>
		);
	}

	/**
	 * Defines the elements access key.
	 */
	@Prop() public _accessKey?: AccessKeyPropType;

	/**
	 * Hides the caption by default and displays the caption text with a tooltip when the
	 * interactive element is focused or the mouse is over it.
	 * @TODO: Change type back to `HideLabelPropType` after Stencil#4663 has been resolved.
	 */
	@Prop() public _hideLabel?: boolean = false;

	/**
	 * Defines the g classnames (e.g. `_icons="fa-solid fa-user"`).
	 */
	@Prop() public _icons?: Stringified<KoliBriIconsProp>;

	/**
	 * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.
	 */
	@Prop() public _label!: LabelWithExpertSlotPropType;
}

import { Log } from './dev.utils';

type HintOptions = {
	details?: unknown[];
	force?: boolean;
};

const a11yCache: Set<string> = new Set();
export const a11yHint = (msg: string, options?: HintOptions): void => {
	if (a11yCache.has(msg) === false || !!options?.force) {
		a11yCache.add(msg);
		Log.debug(([msg] as unknown[]).concat(options?.details || []), {
			classifier: `✋ a11y`,
			forceLog: !!options?.force,
			overwriteStyle: '; background-color: #09f',
		});
	}
};

const deprecatedCache: Set<string> = new Set();
export const deprecatedHint = (msg: string, options?: HintOptions): void => {
	if (deprecatedCache.has(msg) === false || !!options?.force) {
		deprecatedCache.add(msg);
		Log.warn(([msg] as unknown[]).concat(options?.details || []), {
			classifier: `🔥 deprecated`,
			forceLog: !!options?.force,
			overwriteStyle: '; background-color: #f00',
		});
	}
};

const devCache: Set<string> = new Set();
export const devHint = (msg: string, options?: HintOptions): void => {
	if (devCache.has(msg) === false || !!options?.force) {
		devCache.add(msg);
		Log.debug(([msg] as unknown[]).concat(options?.details || []), {
			classifier: `💻 dev`,
			forceLog: !!options?.force,
			overwriteStyle: '; background-color: #f09',
		});
	}
};
export const devWarning = (msg: string, options?: HintOptions): void => {
	if (devCache.has(msg) === false || !!options?.force) {
		devCache.add(msg);
		Log.warn(([msg] as unknown[]).concat(options?.details || []), {
			classifier: `⚠️ dev`,
			forceLog: !!options?.force,
			overwriteStyle: '; background-color: #f09',
		});
	}
};

const featureCache: Set<string> = new Set();
export const featureHint = (msg: string, done = false, options?: HintOptions): void => {
	if (featureCache.has(msg) === false || !!options?.force) {
		featureCache.add(msg);
		msg += done === true ? ' ✅' : '';
		Log.debug(([msg] as unknown[]).concat(options?.details || []), {
			classifier: `🌟 feature`,
			forceLog: !!options?.force,
			overwriteStyle: '; background-color: #309',
		});
	}
};
devHint(`We appreciate any feedback, comments, screenshots, or demo links of an application based on KoliBri (kolibri@itzbund.de). Thank you!`);

const uiUxCache: Set<string> = new Set();
export const uiUxHint = (msg: string, options?: HintOptions): void => {
	if (uiUxCache.has(msg) === false || !!options?.force) {
		uiUxCache.add(msg);
		Log.debug(([msg] as unknown[]).concat(options?.details || []), {
			classifier: `📑 ui/ux`,
			forceLog: !!options?.force,
			overwriteStyle: '; background-color: #060;',
		});
	}
};

export const a11yHintDisabled = (): void => {
	a11yHint(
		`"Disabled" limits accessibility and visibility. From an accessibility perspective, we recommend using the readonly attribute instead of disabled.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`,
	);
};

export const a11yHintLabelingLandmarks = (value: unknown): void => {
	if (typeof value !== 'string' || value === '') {
		a11yHint(
			`Some structural elements, such as the nav tag, can be used multiple times on a webpage. To distinguish between similarly named structural elements, it is necessary to set an ARIA label.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`,
		);
	}
};

export const uiUxHintMillerscheZahl = (className: string, length = 8): void => {
	if (length > 7) {
		uiUxHint(
			`[${className}] Within navigation structures, it is recommended to use no more than 7 menu items.

Link:
- https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two`,
		);
	}
};

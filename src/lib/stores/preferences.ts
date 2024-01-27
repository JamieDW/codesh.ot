import { persisted } from 'svelte-persisted-store';
import { themes } from '$lib/components/editor';
import { derived } from 'svelte/store';
import { isApple } from '$lib/utils';
import { gradients } from '$lib/types/gradients';
import { directions } from '$lib/types/directions';

export const preferences = persisted('preferences', {
	theme: 'One Dark',
	style: isApple(),
	gradient: 'Solid Blue',
	direction: 'To Top'
});

export const theme = derived(preferences, ($preferences) =>
	themes.find((t) => t.name === $preferences.theme)
);

export const background = derived(
	preferences,
	($preferences): string =>
		`${directions.find((t) => t.name === $preferences.direction)?.class} ${gradients.find((t) => t.name === $preferences.gradient)?.class}`
);

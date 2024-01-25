import { persisted } from 'svelte-persisted-store'
import { themes } from '$lib/components/editor';
import { derived } from 'svelte/store';
import { isApple, shade } from '$lib/utils';

export const preferences = persisted('preferences', {
	theme: 'One Dark',
	style: isApple(),
	background: '#3B82F6',
});


export const theme = derived(preferences, ($preferences) => themes.find(t => t.name === $preferences.theme));

export const gradient = derived(preferences, ($preferences) => ({
	from: shade($preferences.background, 50),
	to: $preferences.background
}));

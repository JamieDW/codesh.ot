import { persisted } from 'svelte-persisted-store'
import { themes } from '$lib/components/editor';
import { derived } from 'svelte/store';

export const preferences = persisted('preferences', {
	theme: 'One Dark'
});


export const theme = derived(preferences, ($preferences) => themes.find(t => t.name === $preferences.theme));
<script lang="ts">
	import { Minus, Square, X } from 'lucide-svelte';
	import { Editor, themes, languages, type Theme, type Language } from '$lib/components/editor';

	let value: string = '';

	let theme: Theme = themes[0];

	let language: Language = languages[0];
</script>

<svelte:head>
	<title>Codesh.ot</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div
	style:background-color={theme.background}
	class="flex h-96 w-full flex-col rounded-3xl drop-shadow-xl"
>
	<div class="flex h-10 w-full items-center justify-end gap-4 p-4 text-white *:size-4">
		<Minus />
		<Square />
		<X />
	</div>

	<Editor bind:value={language.template} bind:theme bind:language />

	<select bind:value={theme}>
		{#each themes as theme}
			<option value={theme}>
				{theme.name}
			</option>
		{/each}
	</select>

	<select bind:value={language}>
		{#each languages as language}
			<option value={language}>
				{language.name}
			</option>
		{/each}
	</select>
</div>

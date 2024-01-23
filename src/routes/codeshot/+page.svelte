<script lang="ts">
	import { Minus, Square, X } from 'lucide-svelte';
	import { Editor, themes, languages, type Language } from '$lib/components/editor';
	import { ThemeSelector } from '$lib/components/theme-selector';
	import { theme } from '$lib/stores/theme'

	let value: string = '';



	let language: Language = languages[0];
</script>

<svelte:head>
	<title>Codesh.ot</title>
	<meta name="description" content="About this app" />
</svelte:head>


<div
	style:background-color={$theme?.background}
	class="flex h-96 w-full flex-col rounded-3xl drop-shadow-xl"
>
	<div class="flex h-10 w-full items-center justify-end gap-4 p-4 text-white *:size-4">
		<Minus />
		<Square />
		<X />
	</div>



	<Editor bind:value={language.template} bind:language />



	<select bind:value={language}>
		{#each languages as language}
			<option value={language}>
				{language.name}
			</option>
		{/each}
	</select>
</div>

<ThemeSelector/>

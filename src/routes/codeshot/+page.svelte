<script lang="ts">
	import { Editor, EditorHeader, languages, themes, type Language } from '$lib/components/editor';
	import { background, preferences, theme } from '$lib/stores/preferences';
	import { gradients } from '$lib/types/gradients';
	import { directions } from '$lib/types/directions';

	let language: Language = languages[0];




</script>

<svelte:head>
	<title>Codesh.ot</title>
	<meta name="description" content="About this app" />
</svelte:head>



<div

	class="relative flex flex-col rounded-xl  max-w-screen-lg  p-12 {$background} resize-x overflow-auto"
>

	<div class="drop-shadow-xl rounded-3xl" style:background-color={$theme.background}>
		<EditorHeader/>

			<Editor bind:value={language.template} bind:language />

		<div class="h-6"></div>

	</div>


</div>


	<select bind:value={$preferences.gradient}>
		{#each gradients as gradient}
			<option value={gradient.name}>
				{gradient.name}
			</option>
		{/each}
	</select>

	<select bind:value={$preferences.direction}>
		{#each directions as direction}
			<option value={direction.name}>
				{direction.name}
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

	<select bind:value={$preferences.theme}>
		{#each themes as theme}
			<option value={theme.name}>
				{theme.name}
			</option>
		{/each}
	</select>



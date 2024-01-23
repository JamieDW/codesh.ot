<script lang="ts">

	import type { Theme } from '$lib/components/editor';

	export let theme: Theme;
	export let selected: boolean = false;
</script>

<div>
	<p>{theme.name}</p>
	<div style:background-color={theme.background} class="rounded-3xl aspect-video h-40 {selected && 'outline outline-2 outline-offset-2'}">
	</div>
</div>

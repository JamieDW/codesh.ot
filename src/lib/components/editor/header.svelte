<script>
	import { Minus, Square, X } from 'lucide-svelte';
	import { preferences } from '$lib/stores/preferences';
</script>

<div class="flex h-10 w-full items-center justify-between p-4">
	<div class="flex w-24 items-center gap-4 {$preferences.style || '*:hidden'}">
		<div class="size-4 rounded-full bg-[#ff605C]"></div>
		<div class="size-4 rounded-full bg-[#FFBD44]"></div>
		<div class="size-4 rounded-full bg-[#00CA4E]"></div>
	</div>

	<span on:click={() => ($preferences.style = !$preferences.style)} class="text-xs text-white"
		>index.js</span
	>

	<div class="flex w-24 items-center justify-end gap-4 {$preferences.style && '*:hidden'}">
		<Minus class="size-4 text-white" />
		<Square class="size-4 text-white" />
		<X class="size-4 text-white" />
	</div>
</div>

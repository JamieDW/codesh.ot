<script>
	import { Minus, Square, X } from 'lucide-svelte';
	import { preferences } from '$lib/stores/preferences';
</script>



<div class="flex h-10 w-full items-center justify-between p-4" >

	<div class="w-24 flex items-center gap-4 {$preferences.style || '*:hidden'}">
		<div class="bg-[#ff605C] rounded-full size-4"></div>
		<div class="bg-[#FFBD44] rounded-full size-4"></div>
		<div class="bg-[#00CA4E] rounded-full size-4"></div>
	</div>


	<span on:click={() => $preferences.style = !$preferences.style} class="text-xs text-white">index.js</span>

	<div class="w-24 flex items-center justify-end gap-4 {$preferences.style && '*:hidden'}">
		<Minus class="text-white size-4" />
		<Square class="text-white size-4"/>
		<X class="text-white size-4"/>
	</div>
</div>
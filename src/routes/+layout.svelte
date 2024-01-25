<script>
	import Header from './Header.svelte';
	import '../app.css';
	import { gradient, preferences } from '$lib/stores/preferences';



	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

</script>

<input type="color" class="absolute w-0 h-0" style:left="{m.x}px" style:top="{m.y}px"  bind:value={$preferences.background} />


<div on:mousemove={handleMousemove} class="flex min-h-screen flex-col bg-gradient-to-r from-sky-400"
			style:--tw-gradient-from={$gradient.from}
			style:--tw-gradient-to={$gradient.to}


>



	<Header />

	<main class="mx-auto grid w-full max-w-screen-lg flex-1 flex-col place-items-center p-4">
		<slot />
	</main>

	<footer class="flex flex-col items-center justify-center p-3">
		<p>
			visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
		</p>
	</footer>
</div>

<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col bg-slate-800">
	<Header />

	<main class="mx-auto grid w-full flex-1 flex-col place-items-center p-4">
		<slot />
	</main>

	<footer class="flex flex-col items-center justify-center p-3">
		<p>
			visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
		</p>
	</footer>
</div>

<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-r from-sky-400 to-blue-500">
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

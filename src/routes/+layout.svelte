<script>
	import '../app.css';
	import PreferenceMenu from '$lib/components/preference-menu.svelte';
</script>

<div class="flex min-h-screen flex-col bg-slate-800">
<!--	<Header />-->

	<main class="mx-auto grid w-full flex-1 flex-col place-items-center p-4">
		<slot />
	</main>

	<footer class="flex flex-col items-center justify-center p-3">
		<PreferenceMenu />
	</footer>
</div>

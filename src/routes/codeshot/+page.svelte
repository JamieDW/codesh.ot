<script lang="ts">
	import { Minus, Square, X } from 'lucide-svelte';
	import { toPng } from 'html-to-image';

	let code: HTMLDivElement | undefined = undefined;

	function save(){
		toPng(code)
			.then(function (dataUrl) {
				var img = new Image();
				img.src = dataUrl;
				document.body.appendChild(img);
			})
			.catch(function (error) {
				console.error('oops, something went wrong!', error);
			});
	}
</script>

<svelte:head>
	<title>Codeshot</title>
	<meta name="description" content="About this app" />
</svelte:head>


<div bind:this={code} class="flex h-96 w-full rounded-3xl bg-zinc-900">
	<div class="flex h-10 w-full items-center justify-end gap-4 p-4 text-white *:size-4">
		<Minus />
		<Square />
		<X />
	</div>

</div>

<button on:click={save}>Save</button>


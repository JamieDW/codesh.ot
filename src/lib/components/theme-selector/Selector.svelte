<script lang="ts">
	import { Drawer, Trigger, Content } from '$lib/components/ui/drawer';
	import { themes } from '$lib/components/editor';
	import Card from './Card.svelte';
	import { preferences } from '$lib/stores/preferences';
</script>

<Drawer>
	<Trigger>Open</Trigger>
	<Content class="mx-auto max-h-96 w-full max-w-6xl">
		<div class="grid grid-cols-1 overflow-auto sm:grid-cols-2 md:grid-cols-3">
			{#each themes as _theme}
				{@const selected = $preferences.name === _theme.name}

				<div
					on:click={() => preferences.set({ theme: _theme.name })}
					class="flex w-full shrink-0 justify-center"
				>
					<Card {selected} theme={_theme} />
				</div>
			{/each}

			<!--			<div class="w-full flex flex-col gap-6 snap-y">-->
			<!--				<div class="snap-center shrink-0">-->
			<!--					<div class="shrink-0 w-4 sm:w-48"></div>-->
			<!--				</div>-->
			<!--				{#each themes as _theme}-->
			<!--					{@const selected = $preferences.name === _theme.name}-->
			<!--					<div class="snap-center shrink-0 first:pl-8 last:pr-8">-->
			<!--						<div on:click={() => preferences.set({preferences: _theme.name})} class="shrink-0">-->

			<!--							<Card {selected} preferences={_theme}/>-->

			<!--						</div>-->
			<!--					</div>-->
			<!--				{/each}-->
			<!--				<div class="snap-center shrink-0">-->
			<!--					<div class="shrink-0 w-4 sm:w-48"></div>-->
			<!--				</div>-->
			<!--			</div>-->
		</div>
	</Content>
</Drawer>

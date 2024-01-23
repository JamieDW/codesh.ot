<script lang="ts">
	import { Drawer, Trigger, Content, Header, Title, Footer } from '$lib/components/ui/drawer';
	import { type Theme, themes } from '$lib/components/editor';
	import Card from './Card.svelte';
	import { preferences, theme } from '$lib/stores/theme';






</script>
<Drawer>
	<Trigger>Open</Trigger>
	<Content>
		<Header>
			<Title>Theme</Title>
		</Header>
		<Footer>
			{$theme.name}
			<div class="w-full flex gap-6 snap-x overflow-x-auto pb-14">
				<div class="snap-center shrink-0">
					<div class="shrink-0 w-4 sm:w-48"></div>
				</div>
				{#each themes as _theme}
					{@const selected = $theme.name === _theme.name}
					<div class="snap-center shrink-0 first:pl-8 last:pr-8">
							<div on:click={() => preferences.set({theme: _theme.name})} class="shrink-0">

									<Card {selected} theme={_theme}/>


							</div>
						</div>
				{/each}
				<div class="snap-center shrink-0">
					<div class="shrink-0 w-4 sm:w-48"></div>
				</div>
			</div>

		</Footer>
	</Content>
</Drawer>
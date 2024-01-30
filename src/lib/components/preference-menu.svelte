<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { background, preferences, theme } from '$lib/stores/preferences';
	import { gradients } from '$lib/types/gradients';
	import { directions } from '$lib/types/directions';
	import { themes } from '$lib/components/editor';
</script>

<div class="rounded-full max-w-screen-lg border flex flex-row gap-4 p-2">

	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<div class="rounded-full size-8 border {$background}"></div>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56">
			<DropdownMenu.Label>Background</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.RadioGroup bind:value={$preferences.gradient}>
				{#each gradients as gradient}
					<DropdownMenu.RadioItem value={gradient.name}>{gradient.name}</DropdownMenu.RadioItem>
				{/each}
			</DropdownMenu.RadioGroup>
		</DropdownMenu.Content>
	</DropdownMenu.Root>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<div>{$preferences.direction}></div>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56">
			<DropdownMenu.Label>Direction</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.RadioGroup bind:value={$preferences.direction}>
				{#each directions as direction}
					<DropdownMenu.RadioItem value={direction.name}>{direction.name}</DropdownMenu.RadioItem>
				{/each}
			</DropdownMenu.RadioGroup>
		</DropdownMenu.Content>
	</DropdownMenu.Root>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<div class="rounded-full size-8 border" style:background-color={$theme.background}></div>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56">
			<DropdownMenu.Label>Theme</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.RadioGroup bind:value={$preferences.theme}>
				{#each themes as theme}
					<DropdownMenu.RadioItem value={theme.name}>{theme.name}</DropdownMenu.RadioItem>
				{/each}
			</DropdownMenu.RadioGroup>
		</DropdownMenu.Content>
	</DropdownMenu.Root>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<div class="rounded-full size-8 border">{$preferences.fontSize}px</div>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56">
			<DropdownMenu.Label>Font size</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.RadioGroup bind:value={$preferences.fontSize}>
				{#each [8,10,12,14,16,18,20,22,24,26,28,30] as fontSize}
					<DropdownMenu.RadioItem value={fontSize}>{fontSize}px</DropdownMenu.RadioItem>
				{/each}
			</DropdownMenu.RadioGroup>
		</DropdownMenu.Content>
	</DropdownMenu.Root>



<!--	<select bind:value={language}>-->
<!--		{#each languages as language}-->
<!--			<option value={language}>-->
<!--				{language.name}-->
<!--			</option>-->
<!--		{/each}-->
<!--	</select>-->




</div>
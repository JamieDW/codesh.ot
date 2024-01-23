<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import type { Theme, Language } from './index';

	export let value: string = '';

	export let theme: Theme;

	export let language: Language;
</script>

<CodeMirror bind:value lang={language.extension} theme={theme.extension} />

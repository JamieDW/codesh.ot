<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import type { Language } from './index';
	import { theme} from '$lib/stores/preferences';


	export let value: string = '';

	export let language: Language;
</script>

<div style:font-size={"16px"}>
	<CodeMirror bind:value lang={language.extension} theme={$theme.extension} />
</div>

<!--width: "500px",-->
<!--maxWidth: "100%",-->
<!--height: "50rem",-->
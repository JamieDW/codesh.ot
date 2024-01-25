import Root from './editor.svelte';
import Header from './header.svelte';
import { type Language, languages } from './languages';
import { type Theme, themes } from './themes';

export {
	Root,
	Header,
	type Language,
	type Theme,
	languages,
	themes,
	//
	Root as Editor,
	Header as EditorHeader
};

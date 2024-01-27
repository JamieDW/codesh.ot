import type { LanguageSupport } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { php } from '@codemirror/lang-php';

export type Language = {
	extension: LanguageSupport;
	name: string;
	template: string;
};

export const languages: Language[] = [
	{
		extension: javascript(),
		name: 'Javascript',
		template:
			'' +
			'document.addEventListener("DOMContentLoaded", () => {\n' +
			'  console.log("Hello World!");\n' +
			'});'
	},
	{
		extension: php(),
		name: 'PHP',
		template:
			'' +
			'document.addEventListener("DOMContentLoaded", () => {\n' +
			'  console.log("Hello World!");\n' +
			'});'
	},
	{
		extension: html(),
		name: 'HTML',
		template:
			'' +
			'document.addEventListener("DOMContentLoaded", () => {\n' +
			'  console.log("Hello World!");\n' +
			'});'
	}
];

import { oneDark, background as oneDarkBackground } from './one-dark';
import { basicLight, background as basicLightBackground } from './basic-light';
import { basicDark, background as basicDarkBackground } from './basic-dark';
import { solarizedDark, background as solarizedDarkBackground } from './solarized-dark';
import { solarizedLight, background as solarizedLightBackground } from './solarized-light';
import { materialDark, background as materialDarkBackground } from './material-dark';
import { nord, background as nordBackground } from './nord';
import { gruvboxLight, background as gruvboxLightBackground } from './gruvbox-light';
import { gruvboxDark, background as gruvboxDarkBackground } from './gruvbox-dark';
import type { Extension } from '@codemirror/state';

export type Theme = {
	extension: Extension;
	name: string;
	background: string;
};

export const themes: Theme[] = [
	{
		extension: oneDark,
		name: 'One Dark',
		background: oneDarkBackground
	},
	{
		extension: materialDark,
		name: 'Material Dark',
		background: materialDarkBackground
	},
	{
		extension: nord,
		name: 'Nord',
		background: nordBackground
	},
	{
		extension: basicLight,
		name: 'Basic Light',
		background: basicLightBackground
	},
	{
		extension: basicDark,
		name: 'Basic Dark',
		background: basicDarkBackground
	},
	{
		extension: solarizedLight,
		name: 'Solarized Light',
		background: solarizedLightBackground
	},
	{
		extension: solarizedDark,
		name: 'Solarized Dark',
		background: solarizedDarkBackground
	},
	{
		extension: gruvboxLight,
		name: 'Gruvbox Light',
		background: gruvboxLightBackground
	},
	{
		extension: gruvboxDark,
		name: 'Gruvbox Dark',
		background: gruvboxDarkBackground
	}
];

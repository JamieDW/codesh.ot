import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		sveltekit(),
		visualizer({
			emitFile: true,
			filename: 'stats.html'
		})
	],
	optimizeDeps: {
		exclude: ['codemirror', '@codemirror/*']
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	}
});

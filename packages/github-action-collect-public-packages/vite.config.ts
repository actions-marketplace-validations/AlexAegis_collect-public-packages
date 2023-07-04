import { pakk } from '@alexaegis/vite';
import { builtinModules } from 'node:module';
import { defineConfig } from 'vite';

// default config for node libraries
export default defineConfig({
	build: {
		lib: {
			entry: '',
			formats: ['es'],
		},
		rollupOptions: {
			external: (source: string): boolean => {
				return builtinModules.includes(source) || source.startsWith('node:');
			},
		},
	},
	plugins: [pakk()],
});

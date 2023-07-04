import { pakk } from '@alexaegis/vite';
import { builtinModules } from 'node:module';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		target: 'es2022', // Action only supports node16
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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path/posix';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});

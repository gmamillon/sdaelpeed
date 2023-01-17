import { defineConfig } from 'vitest/config';

export const config = defineConfig({
	test: {
		watch: true,
		globals: true
	}
})
import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: [],
	framework: '@storybook/react-vite',
	async viteFinal(viteConfig) {
		const configDir = path.dirname(fileURLToPath(import.meta.url));
		const srcDir = path.resolve(configDir, '../src');

		viteConfig.resolve = viteConfig.resolve ?? {};
		const existingAlias = viteConfig.resolve.alias ?? {};

		viteConfig.resolve.alias = Array.isArray(existingAlias)
			? [...existingAlias, { find: '@', replacement: srcDir }]
			: { ...existingAlias, '@': srcDir };

		return viteConfig;
	},
};
export default config;

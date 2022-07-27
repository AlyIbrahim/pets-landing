import { sveltekit } from '@sveltejs/kit/vite';

const mode = process.env.APP_ENV

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	mode: mode
};


export default config;

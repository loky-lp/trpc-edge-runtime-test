import { mkdir, rm, writeFile } from 'node:fs/promises'
import * as esbuild from 'esbuild'

await rm('dist', { recursive: true, force: true })
await mkdir('.vercel/output/functions/fn.func', { recursive: true })

// TODO: Add type if possible
const vercelConfig = {
	version: 3,
	overrides: {},
	routes: [
		// {
		// 	handle: 'filesystem',
		// },
		{
			src: '/.*',
			dest: '/fn',
		},
	],
}

// TODO: Add type if possible
const functionConfig = {
	runtime: 'edge', // TODO: Get this option from an src exported config
	entrypoint: 'index.mjs',
}

await Promise.all([
	await writeFile('.vercel/output/config.json', JSON.stringify(vercelConfig, null, 2)),
	await writeFile(
		'.vercel/output/functions/fn.func/.vc-config.json',
		JSON.stringify(functionConfig, null, 2),
	),
	await esbuild.build({
		entryPoints: ['src/index.ts'],
		bundle: true,
		outfile: '.vercel/output/functions/fn.func/index.mjs',
		sourcemap: true,
		logLevel: 'info',
	}),
])

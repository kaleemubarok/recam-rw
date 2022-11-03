import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		env: {
			dir: process.cwd(),
			publicPrefix: 'PUBLIC_'
		},
		files: {
			assets: 'static',
			hooks: {
			  client: 'src/hooks.client',
			  server: 'src/hooks.server'
			},
			lib: 'src/lib',
			// params: 'src/params',
			routes: 'src/routes',
			// serviceWorker: 'src/service-worker',
			appTemplate: 'src/app.html',
			// errorTemplate: 'src/error.html'
		},

	},
};

export default config;

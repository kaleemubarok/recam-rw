import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			edge: false,
	  
			// an array of dependencies that esbuild should treat
			// as external when bundling functions
			external: [],
	  
			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		  }),
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

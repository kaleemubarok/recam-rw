export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["default-avatar.svg","favicon.png","global.css","ic_basic_progress_blue.svg","ic_basic_progress_gray.svg","ic_basic_route_blue.svg","ic_basic_route_gray.svg","ic_basic_settings_gray.svg","logopu.png","nd.css"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-8e79af19.js","imports":["_app/immutable/start-8e79af19.js","_app/immutable/chunks/index-d1f1804c.js","_app/immutable/chunks/singletons-c2507873.js","_app/immutable/chunks/control-03134885.js","_app/immutable/chunks/env-public-6aa99648.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "login-unused",
				pattern: /^\/login-unused\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "log/[id]",
				pattern: /^\/log\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "route",
				pattern: /^\/route\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "route/add",
				pattern: /^\/route\/add\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "route/[id]",
				pattern: /^\/route\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "route/[id]/edit",
				pattern: /^\/route\/([^/]+?)\/edit\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

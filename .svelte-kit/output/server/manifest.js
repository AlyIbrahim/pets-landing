export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-0295aad2.js","imports":["_app/immutable/start-0295aad2.js","_app/immutable/chunks/index-b96070fb.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "tenants-onmount-table-not-working",
				pattern: /^\/tenants-onmount-table-not-working\/?$/,
				names: [],
				types: [],
				path: "/tenants-onmount-table-not-working",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "tenants",
				pattern: /^\/tenants\/?$/,
				names: [],
				types: [],
				path: "/tenants",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/tenants-onmount-table-not-working.svelte"),
	() => import("../../src/routes/tenants.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"tenants-onmount-table-not-working": [[0, 3], [1]],
	"tenants": [[0, 4], [1]]
};
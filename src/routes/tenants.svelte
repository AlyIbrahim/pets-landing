<script context="module">
	// const tenant_service_url = `${import.meta.env.VITE_TENANT_SERVICE}`
	// // const tenant_service_url = `${process.env.VITE_TENANT_SERVICE}`
	// console.log(tenant_service_url)
	// export async function load ({fetch}){
	//     const response = await fetch(tenant_service_url, { mode: 'no-cors' })
	//     const tenants = (await response.json()).Items
	//     console.log(tenants)
	//     return {
	//         props:{
	//             tenants
	//         }
	//     }
	// }
</script>

<script>
	import Table from '$lib/Table.svelte';
	import { debug, onMount } from 'svelte/internal';
	let tenants = [];

	const tenant_service_url = `${import.meta.env.VITE_TENANT_SERVICE}`;
	// const tenant_service_url = `${process.env.VITE_TENANT_SERVICE}`
	// const tenant_service_url = 'https://jsonplaceholder.typicode.com/posts'
	// console.log(tenant_service_url)

	// onMount(async () => {

	// const getTenants = async function() {
	console.log('getTenants');
	// const response = await fetch(tenant_service_url)
	const response = fetch(tenant_service_url).then((data) => data.json());
	// .then((data) => {console.log(data); data.json()})
	// console.log(response)
	// tenants = (await response.json()).Items
	// console.log(tenants)
	// }
	// })
	// getTenants()
</script>

{#await response}
	Fetching ..
{:then data}
	<Table tenants={data.Items} />
{:catch error}
	You have no tenants created.
{/await}

<!-- {JSON.stringify(tenants)} -->

<!-- <ul>
    {#each tenants as tenant}
    <li>{tenant.tenant}</li>
{/each}
</ul> -->

<!-- <Table tenants={tenants} /> -->

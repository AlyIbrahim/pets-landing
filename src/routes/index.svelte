<script>
	import * as dotenv from 'dotenv';
	import { onMount } from 'svelte';
	// dotenv.config()
	import InputForm from '$lib/InputForm.svelte';

	// onMount(async () => {
	// // addEventListener('load', async () => {
	//     let sw = await navigator.serviceWorker.register('../sw.js')
	//     console.log(sw)
	// })

	// onMount(async () => { handleSubscription() })

	const handleSubscription = async () => {
		let sw = await navigator.serviceWorker.ready;
		let push = await sw.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey:
				'BNdEaJB-O7dfF66zyezdC0kyauy6GJQKhMvwrKEO5ATrPRC8v7F7WVGOLenGlPdKfrPfJq3GTpdlpmavc7dHbYA'
		});
		console.log(JSON.stringify(push));
	};
</script>

<h1>Pets Management Landing Page</h1>
<!-- <h1>Register your own tenant</h1> -->
<div style="display: flex; justify-content: center;">
	<button on:click={handleSubscription}>Subscribe to Notifications</button>
</div>
<InputForm />
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<!-- <h1>Hello {import.meta.env.VITE_NAME}</h1> -->
<!-- <h1>Hello {process.env.VITE_NAME}</h1> -->

<!-- <h1>Hello {process.env.NOLA}</h1> -->
<style>
	button {
		width: 30%;
		background-color: #0044ff;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>

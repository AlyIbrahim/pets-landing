<script>
    import * as dotenv from 'dotenv';
    import { onMount } from 'svelte';
    // dotenv.config()
import InputForm from '$lib/InputForm.svelte'

// onMount(async () => {
// // addEventListener('load', async () => {
//     let sw = await navigator.serviceWorker.register('../sw.js')
//     console.log(sw)
// })

onMount(async () => { handleSubscription() })

const handleSubscription = async () =>{
    let sw = await navigator.serviceWorker.ready
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BO5vVQK3W3oq4Ll6q9F0QPGaa74poJdy6tW8vgjnpADkAVL7tSOpn23GCa22EjoWBiouk6GzKc4Vhg6yv78owJk'
    })
    console.log(JSON.stringify(push))
}

</script>
<h1>Welcome to SvelteKit</h1>
<InputForm />
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<!-- <h1>Hello {import.meta.env.VITE_NAME}</h1> -->
<!-- <h1>Hello {process.env.VITE_NAME}</h1> -->
<!-- <h1>Hello {process.env.NOLA}</h1> -->
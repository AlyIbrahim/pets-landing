<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let count = 0;
    function handleClick(){
        count += 1;
    }
    let name = "";
    let email = "";
    let tier = "Free";
    let version = "v1"

    const reg_service = `${import.meta.env.VITE_REGISTERATION_SERVICE}`

    async function CreateTenant(){
        console.log({ name, email, tier })
		console.log(reg_service)
        let response = await fetch(`${reg_service}`, {
            // mode: 'no-cors', //limits headers: https://stackoverflow.com/questions/45591594/fetch-does-not-send-headers
            method: 'POST',
            headers: new Headers([
              ["Content-Type", "application/json"]
        ]),
            body: JSON.stringify({ 
				tenant: name, 
				email,
				tier,
				base_domain:"kube.ab.tobealy.com",
			  action: "create-tenant",
        status: "Registered",
        version: version
       }),
        })
		console.log(response)
        // dispatch('newAnimal', {
        //     name: name,
        //     type: type,
        //     age: age
        // })
    }
</script>
<div>
<label for="name">Name</label>
<input type="text" id="name" name="name" bind:value={name} placeholder="Aly">
	
<label for="email">Email</label>
<input type="text" id="email" name="email" bind:value={email} placeholder="aly@aly.com">

<label for="tier">Tier</label>
<input type="text" id="tier" name="tier" bind:value={tier} placeholder="Free/Pro/Enterprise">

<label for="version">Version</label>
<input type="text" id="version" name="version" bind:value={version} placeholder="v1">

<!-- <label for="base_domain">Age</label>
<input type="text" id="base_domain" name="base_domain" bind:value={base_domain} placeholder="ab.tobealy.com"> -->

<input type="submit" on:click={CreateTenant}
    value="Create a {tier} tier for {name}"/>

</div>
<style>


div {
  border-radius: 5px;
  /* background-color: #f2f2f2; */
  padding: 20px;
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; */
}

label {
    padding-left: 1%;
    float: left;
}

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
} */

input[type=submit] {
  width: 100%;
  background-color: #0044ff;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
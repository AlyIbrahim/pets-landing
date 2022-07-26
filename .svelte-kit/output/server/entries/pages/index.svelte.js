import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, e as escape, v as validate_component } from "../../_app/immutable/chunks/index-187bc73e.js";
import "dotenv";
const InputForm_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-fl9noc{border-radius:5px;padding:20px}label.svelte-fl9noc{padding-left:1%;float:left}input[type=text].svelte-fl9noc{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}input[type=submit].svelte-fl9noc{width:100%;background-color:#0044ff;color:white;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}input[type=submit].svelte-fl9noc:hover{background-color:#45a049}",
  map: null
};
const InputForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let name = "";
  let email = "";
  let tier = "Free";
  $$result.css.add(css);
  return `<div class="${"svelte-fl9noc"}"><label for="${"name"}" class="${"svelte-fl9noc"}">Name</label>
<input type="${"text"}" id="${"name"}" name="${"name"}" placeholder="${"Aly"}" class="${"svelte-fl9noc"}"${add_attribute("value", name, 0)}>
	
<label for="${"email"}" class="${"svelte-fl9noc"}">Email</label>
<input type="${"text"}" id="${"email"}" name="${"email"}" placeholder="${"aly@aly.com"}" class="${"svelte-fl9noc"}"${add_attribute("value", email, 0)}>

<label for="${"tier"}" class="${"svelte-fl9noc"}">Tier</label>
<input type="${"text"}" id="${"tier"}" name="${"tier"}" placeholder="${"Free/Pro/Enterprise"}" class="${"svelte-fl9noc"}"${add_attribute("value", tier, 0)}>



<input type="${"submit"}" value="${"Create a " + escape(tier, true) + " tier for " + escape(name, true)}" class="${"svelte-fl9noc"}">

</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to SvelteKit</h1>
${validate_component(InputForm, "InputForm").$$render($$result, {}, {}, {})}



`;
});
export {
  Routes as default
};

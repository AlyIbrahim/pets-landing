import { c as create_ssr_component, o as onMount, f as each, e as escape } from "../../_app/immutable/chunks/index-187bc73e.js";
/* empty css                                                                        */const Tenants_onmount_table_not_working = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tenants = [];
  const tenant_service_url = `${"http://localhost:8080/tenant/"}`;
  console.log(tenant_service_url);
  onMount(async () => {
    console.log("getTenants");
    const response = await fetch(tenant_service_url);
    tenants = (await response.json()).Items;
  });
  return `



<ul>${each(tenants, (tenant) => {
    return `<li>${escape(tenant.tenant)}</li>`;
  })}</ul>

`;
});
export {
  Tenants_onmount_table_not_working as default
};

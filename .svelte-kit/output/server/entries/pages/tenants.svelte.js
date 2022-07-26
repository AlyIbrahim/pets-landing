import { c as create_ssr_component, f as each, e as escape, i as is_promise, n as noop, v as validate_component } from "../../_app/immutable/chunks/index-187bc73e.js";
/* empty css                                                                        */const css = {
  code: "table.svelte-16z256w{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%}td.svelte-16z256w,th.svelte-16z256w{border:1px solid #ddd;padding:8px}tr.svelte-16z256w:nth-child(even){background-color:#f2f2f2}tr.svelte-16z256w:hover{background-color:rgb(255, 0, 0)}th.svelte-16z256w{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#e9ac5c;background-color:#ff3e00;color:white}",
  map: null
};
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tenants } = $$props;
  if ($$props.tenants === void 0 && $$bindings.tenants && tenants !== void 0)
    $$bindings.tenants(tenants);
  $$result.css.add(css);
  return `<h1>Tenants</h1>


<table class="${"svelte-16z256w"}"><thead><tr class="${"svelte-16z256w"}">${each(Object.keys(tenants[0]), (header) => {
    return `<th class="${"svelte-16z256w"}">${escape(header)}</th>`;
  })}</tr></thead>
	<tbody>${each(Object.values(tenants), (row) => {
    return `<tr class="${"svelte-16z256w"}">${each(Object.values(row), (cell) => {
      return `<td class="${"svelte-16z256w"}">${escape(cell)}</td>`;
    })}
			</tr>`;
  })}</tbody>
</table>`;
});
const Tenants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tenant_service_url = `${"http://localhost:8080/tenant/"}`;
  console.log("getTenants");
  const response = fetch(tenant_service_url).then((data) => data.json());
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	Fetching ..
`;
    }
    return function(data) {
      return `
	${validate_component(Table, "Table").$$render($$result, { tenants: data.Items }, {}, {})}
`;
    }(__value);
  }(response)}





`;
});
export {
  Tenants as default
};

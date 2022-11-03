import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../chunks/index.js";
import { a as authToken } from "../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authToken;
  $$unsubscribe_authToken = subscribe(authToken, (value) => value);
  let filters = "";
  [].filter((m) => m.name.toLowerCase().includes(filters.toLowerCase()) || m.host_addr.toLowerCase().includes(filters.toLowerCase()));
  $$unsubscribe_authToken();
  return `${$$result.head += `<!-- HEAD_svelte-1ynhcio_START -->${$$result.title = `<title>Route - ReCAM</title>`, ""}<meta name="${"description"}" content="${"Dashboard ReCAM system"}"><!-- HEAD_svelte-1ynhcio_END -->`, ""}



<div class="${"container"}"><div class="${"row"}"><div class="${"col-lg-12"}"><h1 class="${"header-primary mb-3"}">Route</h1>
          <p class="${"subtitle-primary"}">Daftar rute komunikasi API<br class="${"desktop"}"></p></div></div></div>
<div class="${"container"}"><div class="${"row my-report my-5"}"><div class="${"col-lg-8 col-12"}"><div class="${"form-group default-card"}"><div class="${"mt-3"}"><input name="${"keyword"}" type="${"text"}" placeholder="${"Nama Rute / Alamat Endpoint"}" class="${"form-control"}" id="${"exampleInputPassword1"}" required minlength="${"6"}"${add_attribute("value", filters, 0)}></div></div></div>
      <div class="${"col-lg-3 col-12"}"><div class="${"form-group default-card"}"><label for="${"exampleInputPassword1"}" class="${"form-label"}"></label>
              <a class="${"btn btn-primary mt-3"}" href="${"/route#list"}">Cari</a></div></div></div>

  <div class="${"row basic-form my-5"}" id="${"list"}"><div class="${"col-lg-12 col-12"}"><div class="${"default-card"}"><div class="${"form-group"}"><label for="${"exampleInputPassword1"}" class="${"form-label"}"></label>
               <a class="${"btn btn-primary mt-3"}" href="${"/route/add"}">Tambah</a></div>
            ${`unable to get routes data.`}</div></div></div>
</div>`;
});
export {
  Page as default
};

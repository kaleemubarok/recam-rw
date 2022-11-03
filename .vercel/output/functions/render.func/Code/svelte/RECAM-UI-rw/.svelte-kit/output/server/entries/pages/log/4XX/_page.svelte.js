import { c as create_ssr_component, b as subscribe } from "../../../../chunks/index.js";
import { a as authToken } from "../../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authToken;
  $$unsubscribe_authToken = subscribe(authToken, (value) => value);
  $$unsubscribe_authToken();
  return `${$$result.head += `<!-- HEAD_svelte-ai7pmv_START -->${$$result.title = `<title>Dashboard - ReCAM</title>`, ""}<meta name="${"description"}" content="${"Dashboard ReCAM system"}"><!-- HEAD_svelte-ai7pmv_END -->`, ""}

<div class="${"container"}"><div class="${"row"}"><div class="${"col-lg-12"}"><h1 class="${"header-primary mb-3"}">Dashboard - Riwayat Error</h1>
      <p class="${"subtitle-primary"}">Daftar komunikasi API yang belum berhasil <br class="${"desktop"}">akibat kegagalan di sisi internal pengirim
      </p></div></div></div>
<div class="${"container"}"><div class="${"row basic-form my-5"}" id="${"list"}"><div class="${"col-lg-12 col-12"}"><div class="${"default-card"}"><div class="${"table-responsive pb-3"}"><div id="${"DataTables_Table_0_wrapper"}" class="${"dataTables_wrapper dt-bootstrap5 no-footer"}"><div class="${"row"}"><div class="${"col-sm-12"}">${`loading...`}</div></div></div></div></div></div></div>
</div>`;
});
export {
  Page as default
};

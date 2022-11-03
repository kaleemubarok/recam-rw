import { c as create_ssr_component, b as subscribe } from "../../../../../chunks/index.js";
import { a as authToken } from "../../../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authToken;
  $$unsubscribe_authToken = subscribe(authToken, (value) => value);
  $$unsubscribe_authToken();
  return `<div class="${"container"}"><div class="${"row"}"><div class="${"col-lg-12"}"><h1 class="${"header-primary mb-3"}">Route - Edit Rute</h1>
          <p class="${"subtitle-primary"}">Rubah rute komunikasi API </p></div></div></div>
${``}`;
});
export {
  Page as default
};

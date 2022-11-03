import { c as create_ssr_component, b as subscribe } from "../../../../chunks/index.js";
import { a as authToken } from "../../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authToken;
  $$unsubscribe_authToken = subscribe(authToken, (value) => value);
  $$unsubscribe_authToken();
  return `${``}`;
});
export {
  Page as default
};

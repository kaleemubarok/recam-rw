import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { L as LoginForm } from "../../../chunks/LoginForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("INI LOGIN R");
  return `<h1>INI LOGIN ROUTE</h1>
${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

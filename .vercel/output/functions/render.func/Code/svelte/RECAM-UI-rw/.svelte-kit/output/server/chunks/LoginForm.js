import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from "./index.js";
import { a as authToken } from "./auth.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authToken;
  $$unsubscribe_authToken = subscribe(authToken, (value) => value);
  let username, password, error = "";
  $$unsubscribe_authToken();
  return `<div class="${"row justify-content-center"}"><div class="${"mt-5 col-md-3"}"><div class="${"form-group default-card"}"><h3 class="${"primary-title mb-4"}">Mari Masuk</h3>
                <h4 style="${"color: red; font-size: small;"}">${escape(error)}</h4>
                <form method="${"POST"}"><input type="${"hidden"}" name="${"_token"}" value="${"fdtSaZ3vrTuHh7acUL5X2QH4JGZDJ17irDMLWkvS"}">
                <div class="${"mb-3"}"><label for="${"username"}" class="${"form-label"}">Nama Pengguna</label>
                    <input name="${"username"}" type="${"text"}" placeholder="${"Nama Pengguna / Alamat Email"}" class="${"form-control"}" required minlength="${"1"}"${add_attribute("value", username, 0)}>
                </div><div class="${"mb-3"}"><label for="${"kata kunci"}" class="${"form-label"}">Kata Kunci</label>
                    <input name="${"password"}" type="${"password"}" placeholder="${"Kata Sandi / Password  "}" class="${"form-control"}" required minlength="${"1"}"${add_attribute("value", password, 0)}></div>

                <button type="${"submit"}" class="${"btn btn-primary mt-2 w-100"}">Kirimkan</button></form></div></div></div>`;
});
export {
  LoginForm as L
};

import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../../chunks/index.js";
import { a as authToken } from "../../../../chunks/auth.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let disabled;
  let $$unsubscribe_authToken;
  $$unsubscribe_authToken = subscribe(authToken, (value) => value);
  let name = "";
  let host_addr = "";
  let max_retry = 0;
  let retry_period = 0;
  console.log(disabled);
  disabled = "disabled";
  $$unsubscribe_authToken();
  return `<div class="${"container"}"><div class="${"row"}"><div class="${"col-lg-12"}"><h1 class="${"header-primary mb-3"}">Route - Tambah Baru</h1>
          <p class="${"subtitle-primary"}">Tambahkan rute komunikasi API baru <br class="${"desktop"}"></p></div></div></div>
<div class="${"container"}"><div class="${"row basic-form mt-4"}"><div class="${"col-lg-5 col-12"}"><div class="${"form-group default-card"}"><form action="${""}" method="${"POST"}">
                  <div class="${"mb-3"}"><label for="${"name"}" class="${"form-label"}">Nama</label>
                      <input name="${"name"}" type="${"text"}" class="${"form-control"}" id="${"name"}" required minlength="${"3"}"${add_attribute("value", name, 0)}></div>
                  <div class="${"mb-3"}"><label for="${"description"}" class="${"form-label"}">Deskripsi</label>
                      <textarea name="${"description"}" id="${"description"}" class="${"form-control"}" style="${"height: 150px;"}">${""}</textarea></div>
                  <div class="${"mb-3"}"><label for="${"host_addr"}" class="${"form-label"}">Alamat Endpoint <small>(termasuk
                              https://)</small></label>
                      <input name="${"host_addr"}" type="${"url"}" id="${"host_addr"}" class="${"form-control"}" required minlength="${"6"}"${add_attribute("value", host_addr, 0)}></div>
                  <div class="${"mb-3"}"><label for="${"is_retryable"}" class="${"form-label"}">Ulang Komunikasi</label>
                      <select class="${"form-select-secondary"}" name="${"is_retryable"}" id="${"is_retryable"}" style="${"border-radius: 15px;"}" required><option value="${""}">Pilih Opsi</option><option value="${"Y"}">Ya
                        </option><option value="${"N"}">Tidak
                        </option></select>
                      <small class="${"form-text text-muted d-none"}" id="${"error-kelas_id"}"></small></div>
                  <div class="${"mb-3"}"><label for="${"max_retry"}" class="${"form-label"}">Percobaan Maksimal</label>
                      <input name="${"max_retry"}" type="${"number"}" class="${"form-control"}" id="${"max_retry"}" required minlength="${"6"}" ${disabled ? "disabled" : ""}${add_attribute("value", max_retry, 0)}></div>
                  <div class="${"mb-3"}"><label for="${"retry_period"}" class="${"form-label"}">Periode Jeda <small>(dalam ms)</small></label>
                      <input name="${"retry_period"}" type="${"number"}" class="${"form-control"}" placeholder="${"kosong/0 = default"}" ${disabled ? "disabled" : ""} id="${"retry_period"}" required minlength="${"6"}"${add_attribute("value", retry_period, 0)}></div>
                  <div class="${"mb-3"}"><label for="${"comm_type"}" class="${"form-label"}">Metode Komunikasi</label>
                      <select class="${"form-select-secondary"}" name="${"comm_type"}" id="${"comm_type"}" style="${"border-radius: 15px;"}" required><option value="${""}">Pilih Opsi</option><option value="${"GET"}">GET
                        </option><option value="${"POST"}">POST
                        </option><option value="${"PUT"}">PUT
                        </option><option value="${"DEL"}">DEL
                        </option></select>
                      <small class="${"form-text text-muted d-none"}" id="${"error-kelas_id"}"></small></div>
                  <button type="${"submit"}" class="${"w-100 mt-2 btn btn-primary btn-lg"}">Tambahkan</button>
                  <button type="${"submit"}" class="${"w-100 mt-2 btn btn-secondary btn-lg"}">Kembali</button></form></div></div></div></div>`;
});
export {
  Page as default
};

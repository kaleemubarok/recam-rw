<script>

  import { onMount } from "svelte";
  import {id} from "./+page";
	import authToken from "$lib/auth";
  import { env } from '$env/dynamic/public';
  


  // let hide = "";
  /**
  * @type {any}
  */
  let r;
  let token = "";
  let r_id = ""

  onMount(async () => {
      const response = await fetch(env.PUBLIC_API_ENDPOINT+'/route/'+id,{
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
        body: null
      });
      const data = await response.json();
      if(data.error){
        $authToken = null;
        // window.location.pathname = "/"; //old is /login
      } else {
        r = data.route;
        token = r.token;
        r_id = r.id;
      }
      
  });

  /**
  * @param {string} r_id
  */
  async function tokenRenew(r_id) {
    const res = await fetch(env.PUBLIC_API_ENDPOINT+`/route/`+r_id+`/renewtoken`,{
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
      });
    const rjson = await res.json();
    console.log(rjson);
    token = rjson.new_token;
  }

  const goBack = function() {
    history.back()
  }

  async function confirmDel() {
    const conf = confirm("Yakin mau hapus rute ini?")
    if (conf){
      const res = await fetch(env.PUBLIC_API_ENDPOINT+`/route/`+r_id, 
      {
        method: 'DELETE',
        headers: {
          "Authorization": $authToken
        }
      });
      // console.log(res)
      // const rjson = await res.status;

      res.status!='204' ? alert(res.statusText) : window.location.pathname=`/route`;
    }
  }

  const gotoDetails = (id) => window.location.pathname=`/route/`+id+`/edit`;
</script>

{#if r}

<div class="container">
  <div class="row">
      <div class="col-lg-12">
          <h1 class="header-primary mb-3">Route - Detail Rute</h1>
          <p class="subtitle-primary">Detail rute komunikasi API <br class="desktop">
      </div>
  </div>

</div>
<div class="container">
  <div class="row basic-form mt-4">
      <div class="col-lg-5 col-12">
          <div class="form-group default-card">
              <form method="POST">
                  <!-- <input type="hidden" name="_token" value="fdtSaZ3vrTuHh7acUL5X2QH4JGZDJ17irDMLWkvS"> -->
                  <div class="mb-3">
                      <label for="name" class="form-label">Nama</label>
                      <input name="name" type="text" value="{r.name}" class="form-control" disabled
                          id="exampleInputPassword1" required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for="description" class="form-label">Deskripsi</label>
                      <textarea class="form-control" style="height: 150px;" disabled>{r.description}</textarea>
                  </div>
                  <div class="mb-3">
                      <label for="host_addr" class="form-label">Alamat Endpoint <small>(termasuk
                              https://)</small></label>
                      <input name="host_addr" type="url" value="{r.host_addr}" class="form-control" disabled
                          id="host_addr" required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for="slug" class="form-label">Slug</label>
                      <input name="slug" type="text" value="{r.slug}" class="form-control" disabled
                          id="slug" required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for="token" class="form-label">Token</label>
                      <input name="token" type="text" bind:value="{token}" class="form-control" disabled
                          id="token" required minlength="6">
                     <button on:click="{tokenRenew(r.id)}" type="button" class="w-100 mt-2 btn btn-secondary btn-sm">Perbaharui Token</button>
                  </div>
                  <div class="mb-3">
                      <label for='is_retryable' class="form-label">Ulang Komunikasi</label>
                      <select class="form-select-secondary" name="is_retryable" id="kelas_id" style="border-radius: 15px;" required disabled>
                          {#if r.is_retryable == 'Y'}
                            <option value="Y">
                                Ya
                            </option>
                          {:else}
                            <option value="N">
                              Tidak
                            </option>
                          {/if}
                      </select>
                      <small class="form-text text-muted d-none" id="error-is_retryable"></small>
                  </div>
                  <div class="mb-3">
                      <label for="max_retry" class="form-label">Percobaan Maksimal</label>
                      <input name="max_retry" type="number" class="form-control" value="{r.max_retry}" disabled
                          id="max_retry" required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for="retry_period" class="form-label">Periode Jeda <small>(dalam ms)</small></label>
                      <input name="retry_period" type="number" class="form-control" value="{r.retry_period}" placeholder="kosong/0 = default" disabled
                          id="retry_period" required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for='comm_type' class="form-label">Metode Komunikasi</label>
                      <select class="form-select-secondary" name="comm_type" id="comm_type" style="border-radius: 15px;" required disabled>
                          <option value="{r.comm_type}">{r.comm_type}</option>
                      </select>
                      <small class="form-text text-muted d-none" id="error-comm_type"></small>
                  </div>
                  <button on:click="{gotoDetails(r.id)}" type="button" class="w-100 mt-2 btn btn-primary btn-lg">Edit</button>
                  <button on:click="{confirmDel}" type="button" class="w-100 mt-2 btn btn-danger btn-lg">Hapus</button>
                  <button on:click={goBack} type="button" class="w-100 mt-2 btn btn-secondary btn-lg">Kembali</button>
              </form>
          </div>
      </div>
  </div>
</div>

{/if}

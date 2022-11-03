<script>
import { onMount } from "svelte";
import {id} from "./+page";
import authToken from "$lib/auth";
import { env } from '$env/dynamic/public';

  const goBack = function() {
    history.back()
  }

  /**
  * @type {{ id: any; name: any; description: any; host_addr: any; is_retryable: any; max_retry: any; retry_period: any; comm_type: any; }}
  */
  let r;
  let r_id;
  let is_retryable;
  onMount(async () => {
    console.log("id->",id)
      const response = await fetch(env.PUBLIC_API_ENDPOINT+'/route/'+id,{
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        }
      });
      const data = await response.json();

      if(data.error){
        $authToken = null;
        // window.location.href = "/"  //old is /login
      } else {
        r = data.route;
      }
      
      r_id = r.id;
      is_retryable = r.is_retryable;
  });
  
  $: checkDisabled = is_retryable == "Y" ?  'required' : 'disabled';

  const changeDL = () => {
    is_retryable = document.getElementById("is_retryable").value;
    r.max_retry = 0;
    r.retry_period = 0;
  }
  async function handleForm() {
    let route = JSON.stringify(r);
    try {
      const res = await fetch(env.PUBLIC_API_ENDPOINT+`/route`,{
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
        body: route
      });
      
    } catch (error) {
      console.log(error);
    }
    // @ts-ignore
    // console.log(route)
    window.location.href = "/route#list";
  }
</script>
<div class="container">
  <div class="row">
      <div class="col-lg-12">
          <h1 class="header-primary mb-3">Route - Edit Rute</h1>
          <p class="subtitle-primary">Rubah rute komunikasi API </p>
      </div>
  </div>

</div>
{#if r}
<div class="container">
  <div class="row basic-form mt-4">
      <div class="col-lg-5 col-12">
          <div class="form-group default-card">
              <form on:submit|preventDefault={handleForm}
              method="POST">
                  <!-- <input type="hidden" name="_token" value="fdtSaZ3vrTuHh7acUL5X2QH4JGZDJ17irDMLWkvS"> -->
                  <div class="mb-3">
                      <label for="name" class="form-label">Nama</label>
                      <input name="name" type="text"  class="form-control" bind:value="{r.name}"
                          id="name" required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for="description" class="form-label">Deskripsi</label>
                      <textarea name="description" id="description" class="form-control" style="height: 150px;" bind:value="{r.description}"></textarea>
                  </div>
                  <div class="mb-3">
                      <label for="host_addr" class="form-label">Alamat Host <small>(termasuk
                              https://)</small></label>
                      <input name="host_addr" type="url" id="host_addr" class="form-control" bind:value="{r.host_addr}"
                      required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for="is_retryable" class="form-label">Ulang Komunikasi</label>
                      <select class="form-select-secondary" name="is_retryable" id="is_retryable" bind:value={r.is_retryable} on:change={changeDL} style="border-radius: 15px;" required>
                        <option value="">Pilih Opsi</option>
                        <option value="Y">
                            Ya
                        </option>
                        <option value="N">
                            Tidak
                        </option>
                    </select>
                      <small class="form-text text-muted d-none" id="error-kelas_id"></small>
                  </div>
                  <div class="mb-3">
                      <label for="max_retry" class="form-label">Percobaan Maksimal</label>
                      {#if r.is_retryable == 'Y'}
                        <input name="max_retry" type="number" class="form-control" required bind:value="{r.max_retry}" id="max_retry">
                      {:else}
                       <input name="max_retry" type="number" class="form-control" disabled value="0" id="max_retry">
                      {/if}
                      
                  </div>
                  <div class="mb-3">
                      <label for="retry_period" class="form-label">Periode Jeda <small>(dalam ms)</small></label>
                      {#if r.is_retryable == 'Y'}
                        <input name="retry_period" type="number" class="form-control" placeholder="kosong/0 = default" required bind:value="{r.retry_period}" id="retry_period">
                      {:else}
                        <input name="retry_period" type="number" class="form-control" placeholder="kosong/0 = default" value="0" disabled id="retry_period">
                      {/if}
                  </div>
                  <div class="mb-3">
                      <label for="comm_type" class="form-label">Metode Komunikasi</label>
                      <select  class="form-select-secondary" name="comm_type" id="comm_type" bind:value={r.comm_type} style="border-radius: 15px;" required>
                        <option value="">Pilih Opsi</option>
                        <option value="GET">
                            GET
                        </option>
                        <option value="POST">
                            POST
                        </option>
                        <option value="PUT">
                            PUT
                        </option>
                        <option value="DEL">
                            DEL
                        </option>
                    </select>
                      <small class="form-text text-muted d-none" id="error-kelas_id"></small>
                  </div>
                  <button type="submit" class="w-100 mt-2 btn btn-primary btn-lg">Simpan</button>
                  <button on:click={goBack} type="submit" class="w-100 mt-2 btn btn-secondary btn-lg">Kembali</button>
              </form>
          </div>
      </div>
  </div>
</div>
{/if}

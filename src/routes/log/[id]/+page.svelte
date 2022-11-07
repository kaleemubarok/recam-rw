<script>

  import { onMount } from "svelte";
  import {id} from "./+page";
  import {format} from "date-fns";
  import authToken from '$lib/auth';
  import { env } from '$env/dynamic/public';

  /**
  * @type {any}
  */
  let l;
  let disabled = true;
  let teratasiButton = 'true'; 

  /**
  * @param {string} id
  */
  async function getLog(id) {
    const res = await fetch(env.PUBLIC_API_ENDPOINT+`/log/`+id,{
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        }
      });
    const jsonData = await res.json();
    // console.log(jsonData.error)
    
    if (jsonData.error) {
      $authToken = null;
      // window.location.pathname = "/"; //old is /login
    } else {
      // console.log(jsonData)
      jsonData.log.is_resolved == 'Y' ? teratasiButton = 'none' : teratasiButton = 'true';
      return jsonData;
    } 
  }

  // /**
  // * @param {number} params
  // */
  // async function checkDisable(params) {
  //   if (params>=400 && params<500) {
  //     console.log("masuk ini...")
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  onMount(async function () {
    const logRes = await getLog(id);
    logRes.error ? $authToken = null : l = logRes.log;
    
  });

  const confirmLagi = () => confirm("Yakin anda sudah memastikan komunikasi ini telah teratasi?") ? resolveCommunication(id) : '';

  async function resolveCommunication(id) {
    const res = await fetch(env.PUBLIC_API_ENDPOINT+`/log/`+id+`/resolved`,{
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
      });
    const rjson = await res.json();
    !rjson.error ? dspl='none' : dspl;
    console.log(rjson);
  }

  const goBack = () => history.back();


</script>
{#if l }
<div class="container">
  <div class="row">
      <div class="col-lg-12">
          <h1 class="header-primary mb-3">Dashboard - Log Details</h1>
          <p class="subtitle-primary">Detail riwayat komunikasi <b>#{l.slug}</b><br class="desktop">
      </div>
  </div>
</div>
<div class="container">
  <div class="row my-report my-5">
      <div class="col-lg-7 col-12">
          <div class="form-group default-card">
              <input type="hidden" name="_token" value="fdtSaZ3vrTuHh7acUL5X2QH4JGZDJ17irDMLWkvS">
              <div class="mb-3">
                  <label for="old_password" class="form-label">Waktu</label>
                  <input name="old_password" type="text"
                  value="{format(new Date(l.created_at),"dd/MM/yyyy HH:mm:ss")}" disabled
                      class="form-control" id="old_password" required minlength="6">
              </div>
              <div class="mb-3">
                  <div class="mb-2">
                      <label for="endpoint" class="form-label">Endpoint</label>
                      <input name="endpoint" type="text" class="form-control"
                          value="{!(l.req_query).includes('&')?l.host_addr:l.host_addr+"?"+l.req_query}" {disabled} id="endpoint"
                          required minlength="6">
                  </div>
                  <div class="mb-2">
                      <label for="response_code" class="form-label">Response Code</label>
                      <input name="response_code" type="text" class="form-control" value="{l.code}" disabled
                          id="response_code" required minlength="6">
                  </div>
                  <div class="mb-2">
                    <label for="comm_attempt" class="form-label">Communication Attempt</label>
                    <input name="comm_attempt" type="text" class="form-control" value="{l.trial_attempt}" disabled
                        id="comm_attempt" required minlength="6">
                  </div>

              </div>
          </div>
      </div>
  </div>

  {#if l.trial_attempt > 1 && l.others.data != null }
    {#each l.others.data as o }
      <div class="row my-report my-5">
        <div class="col-lg-12 col-12 default-card">
          Komunikasi ke #{o.no}
        </div>
      </div>
      <div class="row my-report my-5">
        <div class="col-lg-6 col-12">
            <div class="form-group default-card">
                <!-- condition for old data only if not stored in db -->
                {#if o.ip_address != null && o.ip_address != ""} 
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Requester IP</label>
                  <input name="new_password" type="text" class="form-control" value="{o.ip_address}" disabled
                        id="exampleInputPassword1" required minlength="6">
                </div>
                {/if}
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Request Header</label>
                    <textarea name="story" class="form-control" placeholder="Deskripsi Project" disabled
                        id="floatingTextarea2" required style="height: 200px; border-radius: 30px;">{
                          o.req_header
                        }</textarea>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Request Body</label>
                    {#if o.no == l.trial_attempt }
                      <textarea name="story" class="form-control" placeholder="kosong" {disabled}
                      id="floatingTextarea2" required style="height: 200px; border-radius: 30px;">{
                        o.req_body
                      }</textarea>
                    {:else}
                      <textarea name="story" class="form-control" placeholder="kosong" disabled
                      id="floatingTextarea2" required style="height: 200px; border-radius: 30px;">{
                        o.req_body
                      }</textarea>
                    {/if}

                </div>
            </div>
        </div>
        <div class="col-lg-6 col-12">
            <div class="form-group default-card">
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Response Body : <b>{o.res_code}</b></label>
                    <textarea name="story" class="form-control" placeholder="kosong" disabled
                        id="floatingTextarea2" required style="height: 380px; border-radius: 30px;">{
                          o.res_body
                        }</textarea>
                </div>

                {#if o.no == l.trial_attempt }
                  {#if o.res_code >= 500 }
                  <span style="">
                   <button on:click={confirmLagi} style="display: {teratasiButton};width: 100% !important;" class="btn btn-primary mt-4" id="proceed">Tandai Teratasi</button>
                  </span>
                  {/if}
                  <button on:click={goBack} style="width: 100% !important;" class="btn btn-secondary mt-4" id="proceed">Kembali</button>
                {/if}

            </div>
        </div>
      </div>
    {/each}
  {:else}
  <!-- normal comm with only 1 try -->
  <div class="row my-report my-5">
    <div class="col-lg-6 col-12">
        <div class="form-group default-card">
            <!-- when ip logged - display. for old data hide. [for old data condition only may delete on production] -->
            {#if l.others.data != null }
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Requester IP</label>
              <input name="new_password" type="text" class="form-control" value="{l.others.data[0].ip_address}" disabled
                    id="exampleInputPassword1" required minlength="6">
            </div>
            {/if}
            
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Request Header</label>
                <textarea name="story" class="form-control" placeholder="Deskripsi Project" disabled
                    id="floatingTextarea2" required style="height: 200px; border-radius: 30px;">{
                      l.req_header
                    }</textarea>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Request Body</label>
                <textarea name="story" class="form-control" placeholder="kosong" {disabled}
                    id="floatingTextarea2" required style="height: 200px; border-radius: 30px;">{
                      l.req_body
                    }</textarea>
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-12">
        <div class="form-group default-card">
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Response Body</label>
                <textarea name="story" class="form-control" placeholder="kosong" disabled
                    id="floatingTextarea2" required style="height: 380px; border-radius: 30px;">{
                      l.res_body
                    }</textarea>
            </div>
            {#if l.code >= 500 }
                <button on:click={confirmLagi} style="width: 100% !important; display: {teratasiButton};" class="btn btn-primary mt-4" id="proceed">Tandai Teratasi</button>
            {/if}
                  <button on:click={goBack} style="width: 100% !important;" class="btn btn-secondary mt-4" id="proceed">Kembali</button>
            <!-- {#if l.code >= 500 }
                  <a href="javascript:window.location.pathname='/log/5XX'" style="width: 100% !important;" class="btn btn-primary mt-4" id="proceed">
                    <span class="spinner-border spinner-border-sm d-none" role="status"
                        aria-hidden="true"></span>
                    <span>Tandai Teratasi</span>
                  </a>
            {/if}
            <a href={goBack} style="width: 100% !important;" class="btn btn-secondary mt-4" id="proceed">
                <span class="spinner-border spinner-border-sm d-none" role="status"
                    aria-hidden="true"></span>
                <span>Kembali</span>
            </a> -->
        </div>
    </div>
  </div>
  {/if}
</div>

{/if}


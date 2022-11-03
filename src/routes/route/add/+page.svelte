<script>
  import authToken from "$lib/auth";
  import { env } from '$env/dynamic/public';

  const goBack = function() {
    history.back()
  }

  let name = '';
  let description = '';
  let host_addr = '';
  let is_retryable = '';
  let max_retry = 0;
  let retry_period = 0;
  let comm_type = '';

  $: disabled = is_retryable == "Y" ?  '' : 'disabled';
  const changeDL = () => {
    is_retryable = document.getElementById("is_retryable").value;
    max_retry = 0;
    retry_period = 0;
  }
  // $: disabled = (is_retryable) => {
  //   if (is_retryable == "Y" ){
  //     return '';
  //   } else {
  //     max_retry = 0;
  //     retry_period = 0;
  //     return 'disabled';
  //   }
  // }

  console.log(disabled)

  function handleButtonClick() {
    console.log("button clicked");
  }

  async function handleForm() {
    let route = JSON.stringify({
          name,
          description,
          host_addr,
          is_retryable,
          max_retry,
          retry_period,
          comm_type
        });
    try {
      const res = await fetch(env.PUBLIC_API_ENDPOINT+`/route`,{
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
        body: route
      }
    )} catch (error) {
      console.log(error);
    }
    window.location.pathname = "/route";
  }

</script>
<div class="container">
  <div class="row">
      <div class="col-lg-12">
          <h1 class="header-primary mb-3">Route - Tambah Baru</h1>
          <p class="subtitle-primary">Tambahkan rute komunikasi API baru <br class="desktop">
      </div>
  </div>

</div>
<div class="container">
  <div class="row basic-form mt-4">
      <div class="col-lg-5 col-12">
          <div class="form-group default-card">
              <form action="" on:submit|preventDefault={handleForm}
              method="POST">
                  <!-- <input type="hidden" name="_token" value="fdtSaZ3vrTuHh7acUL5X2QH4JGZDJ17irDMLWkvS"> -->
                  <div class="mb-3">
                      <label for="name" class="form-label">Nama</label>
                      <input name="name" type="text"  class="form-control" bind:value="{name}"
                          id="name" required minlength="3">
                  </div>
                  <div class="mb-3">
                      <label for="description" class="form-label">Deskripsi</label>
                      <textarea name="description" id="description" class="form-control" style="height: 150px;" bind:value="{description}"></textarea>
                  </div>
                  <div class="mb-3">
                      <label for="host_addr" class="form-label">Alamat Endpoint <small>(termasuk
                              https://)</small></label>
                      <input name="host_addr" type="url" id="host_addr" class="form-control" bind:value="{host_addr}"
                      required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for="is_retryable" class="form-label">Ulang Komunikasi</label>
                      <select class="form-select-secondary" name="is_retryable" id="is_retryable" bind:value={is_retryable} on:change={ changeDL }  style="border-radius: 15px;" required>
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
                      <input name="max_retry" type="number" class="form-control" bind:value="{max_retry}"
                          id="max_retry" required minlength="6" {disabled}>
                  </div>
                  <div class="mb-3">
                      <label for="retry_period" class="form-label">Periode Jeda <small>(dalam ms)</small></label>
                      <input name="retry_period" type="number" class="form-control" placeholder="kosong/0 = default" bind:value="{retry_period}" {disabled}
                          id="retry_period" required minlength="6">
                  </div>
                  <div class="mb-3">
                      <label for="comm_type" class="form-label">Metode Komunikasi</label>
                      <select  class="form-select-secondary" name="comm_type" id="comm_type" bind:value={comm_type} style="border-radius: 15px;" required>
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
                  <button type="submit" on:click={handleButtonClick} class="w-100 mt-2 btn btn-primary btn-lg">Tambahkan</button>
                  <button on:click={goBack} type="submit" class="w-100 mt-2 btn btn-secondary btn-lg">Kembali</button>
              </form>
          </div>
      </div>
  </div>
</div>

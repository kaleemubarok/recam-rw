<script>
  import {onMount} from 'svelte';
	import authToken from "$lib/auth";
  import { env } from '$env/dynamic/public';

  let rData;

  onMount(async () => {
      const response = await fetch(env.PUBLIC_API_ENDPOINT+'/routes',{
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
        body: null
      });
      const data = await response.json();
      if (data.error){
        $authToken = null;
        // window.location.pathname = "/"; //old is /login
      } else {
        rData = data.routes;
      }
    //   console.log(data.routes);
  });

  function copyIni(p1,p2) {
    const url = env.PUBLIC_API_ENDPOINT+"/go/"+p1+"/"+p2;
    // console.log(url);
    navigator.clipboard.writeText(url);
    alert("Route URL: " + url + " sudah di-copy!");
  }

  let filters = ""; 
  $: filtered = (rData || []).filter(
    (m) =>
    m.name.toLowerCase().includes(filters.toLowerCase()) ||
    m.host_addr.toLowerCase().includes(filters.toLowerCase())
  );

</script>

<svelte:head>
	<title>Route - ReCAM</title>
	<meta name="description" content="Dashboard ReCAM system" />
</svelte:head>



<div class="container">
  <div class="row">
      <div class="col-lg-12">
          <h1 class="header-primary mb-3">Route</h1>
          <p class="subtitle-primary">Daftar rute komunikasi API<br class="desktop">
      </div>
  </div>

</div>
<div class="container">
  <div class="row my-report my-5">
     <div class="col-lg-8 col-12">
          <div class="form-group default-card">
                  <div class="mt-3">
                      <input name="keyword" type="text" placeholder="Nama Rute / Alamat Endpoint" class="form-control"
                          id="exampleInputPassword1" required minlength="6" bind:value={filters}>
                  </div>
          </div>
      </div>
      <div class="col-lg-3 col-12">
          <div class="form-group default-card">
              <label for="exampleInputPassword1" class="form-label"> </label>
              <a class="btn btn-primary mt-3" href="/route#list">Cari</a>
          </div>
      </div>
  </div>

  <div class="row basic-form my-5" id="list">
      <div class="col-lg-12 col-12">
          <div class="default-card">
            <div class="form-group">
              <label for="exampleInputPassword1" class="form-label"></label>
               <a class="btn btn-primary mt-3" href="/route/add">Tambah</a>
            </div>
            {#if rData}
              <div class="table-responsive pb-3" >
                  <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                      <div class="row">
                          <div class="col-sm-12">
                              <table class="table datatables dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                  <thead>
                                      <tr>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" >#</th>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" >Nama</th>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 500px;">Endpoint</th>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" >Pengulangan</th>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" >Max Percobaan</th>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" >Jeda Percobaan</th>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" >Slug</th>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" >Token</th>
                                          <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 148px;" >Action
                                          </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {#each filtered as r, no}
                                      <tr class="align-middle">
                                        <th scope="row" class="">{no+=1}</th>
                                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                                        <td on:click="{copyIni(r.token,r.slug)}" alt="Copy url to route" style="cursor: pointer;">
                                           <span data-tooltip="Click to copy complete URL">{r.name}</span> 
                                        </td>
                                        <td width="40%">{r.host_addr}</td>
                                        <td>{r.is_retryable}</td> 
                                        <td>{r.max_retry}</td>
                                        <td>{r.retry_period}</td>
                                        <td>{r.slug}</td>
                                        <td>{r.token}</td>
                                        <td>
                                            <a href="/route/{r.id}" class="btn btn-secondary" target="_self">Details</a>
                                        </td>
                                    </tr>
                                    {/each}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
            {:else}
              unable to get routes data.
            {/if}
          </div>
      </div>
  </div>
</div>

<style></style>
<script>
  import { onMount } from "svelte";
  import { format } from "date-fns";
  import  authToken from "$lib/auth";
  import { env } from '$env/dynamic/public';
  /**
  * @type {{ logs: any; }}
  */
  let lData;

  onMount(async () => {
    const response = await fetch(env.PUBLIC_API_ENDPOINT+"/logs/4XX",{
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        }
      });
    const jsonData = await response.json();
    
    if(jsonData.error)  {
      $authToken = null;
      // window.location.pathname = "/"; //old is login
    } else {
      lData = jsonData
    };
  });
</script>

<svelte:head>
  <title>Dashboard - ReCAM</title>
  <meta name="description" content="Dashboard ReCAM system" />
</svelte:head>

<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <h1 class="header-primary mb-3">Dashboard - Riwayat Error</h1>
      <p class="subtitle-primary">
        Daftar komunikasi API yang belum berhasil <br class="desktop" />akibat kegagalan di sisi internal pengirim
      </p>
    </div>
  </div>
</div>
<div class="container">
  <div class="row basic-form my-5" id="list">
    <div class="col-lg-12 col-12">
      <div class="default-card">
        <div class="table-responsive pb-3">
          <div
            id="DataTables_Table_0_wrapper"
            class="dataTables_wrapper dt-bootstrap5 no-footer"
          >
            <div class="row">
              <div class="col-sm-12">
                {#if lData}
                  <table
                    class="table datatables dataTable no-footer"
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 27px;"
                          aria-sort="descending"
                          aria-label="#: activate to sort column ascending"
                          >#</th
                        >
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 120px;"
                          aria-label="Cover: activate to sort column ascending"
                          >Waktu</th
                        >
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Name: activate to sort column ascending"
                          style="width: 250px;">Endpoint</th
                        >
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Name: activate to sort column ascending"
                          style="width: 200px;">Communication Attempt</th
                        >
                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 90px;"
                          aria-label="Tipe Kelas: activate to sort column ascending"
                        >
                          Response</th
                        >

                        <th
                          scope="col"
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 148px;"
                          aria-label="Action: activate to sort column ascending"
                          >Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each lData.logs as l, no}
                        <tr class="align-middle even">
                          <th scope="row" class="sorting">{(no += 1)}</th>
                          <td>
                            {format(new Date(l.created_at),"dd/MM/yyyy HH:mm:ss")}
                          </td>
                          <td width="40%">{'['+l.type+'] '+l.host_addr}</td>
                          <td>{l.trial_attempt}</td>
                          <td>{l.response_code}</td>
                          <td>
                            <a
                              href="/log/{l.id}"
                              class="btn btn-secondary"
                              target="_self">Details</a
                            >
                          </td>
                        </tr>
                      {/each}
                    </tbody>
                  </table>
                {:else}
                  loading...
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>

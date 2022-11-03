<script>
    import { onMount } from "svelte";
    import DashboardChart from '$lib/DashboardChart.svelte';
    import {format, subDays} from 'date-fns';
    import authToken from "$lib/auth";
    import { env } from '$env/dynamic/public';

    const udf = undefined;
    let lData, e5xx, e4xx  = udf || [];

    onMount(async () => {
      const response = await fetch(env.PUBLIC_API_ENDPOINT+"/logs",{
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
      });
      const data = await response.json();
      if (data.error) {
        $authToken = null;
        // window.location.pathname = "/"; //old is /login
      } else {
        lData = data.logs;
      }
      
      
      const resp4xx = await fetch(env.PUBLIC_API_ENDPOINT+"/logs/4XX",{
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
      });
      const resp5xx = await fetch(env.PUBLIC_API_ENDPOINT+"/logs/5XX",{
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": $authToken
        },
      });
      const e4data = await resp4xx.json();
      const e5data = await resp5xx.json();

      e4xx = e4data.logs;
      e5xx = e5data.logs;
      // console.log(lData);
      // console.log(e5xx)


    });
    
    let filters = ""; 
    let startDate = format(subDays(new Date(), 7),"yyyy-MM-dd");
    let endDate = format(Date.now(),"yyyy-MM-dd");
    $: filtered = (lData || []).filter(
        (m) =>
        m.host_addr.toLowerCase().includes(filters.toLowerCase()) && 
        format(new Date(m.created_at),"yyyy-MM-dd")>=startDate && 
        format(new Date(m.created_at),"yyyy-MM-dd")<=endDate
    );
    
    $: filtered5xx = (e5xx || []).filter(
      (e) => e.is_resolved === "N"
    )
    $: filtered4xx = (e4xx || []).filter(
      (e) => //e.is_resolved !== "Y" &&
      format(new Date(e.created_at),"yyyy-MM-dd")==format(Date.now(),"yyyy-MM-dd")
    )
  
  </script>
  
  <svelte:head>
    <title>Dashboard - ReCAM</title>
    <meta name="description" content="Dashboard ReCAM system" />
  </svelte:head>
  
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="header-primary mb-3">Dashboard</h1>
        <p class="subtitle-primary">
          Overview komunikasi API saat ini dan<br class="desktop" />Riwayat
          komunikasi API
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row my-report my-5">
      <div class="col-lg-5 col-12">
        <div class="row" style="margin-bottom: 1.5em;">
          <div class="col-lg-6 col-md-12">
            <div class="voucher-card default-card p-4 d-flex flex-column gap-2">
              <h5 class="primary-title">Perhatian!</h5>
              <div class="d-flex align-items-center gap-1 justify-content-between">
                <p class="text-primary mb-0" id="promo-JADICEPE"><b>{filtered4xx.length}</b> Response <b>4XX</b></p>
                <div>
                  <a class="btn btn-copy btn-danger w-100" style="border-radius: 1em; padding: 0.5em;" href="/log/4XX">Periksa</a>
                </div>
              </div>
              <div>Hari ini {format(new Date(Date.now()),"dd/MM/yyyy")}</div>
  
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="voucher-card default-card p-4 d-flex flex-column gap-2">
              <h5 class="primary-title">Perhatian!</h5>
              <div class="d-flex align-items-center gap-1 justify-content-between">
                <p class="text-primary mb-0" id="promo-JADICEPE"><b>{filtered5xx.length}</b> Response <b>5XX</b></p>
                <div>
                  <a class="btn btn-copy btn-warning w-100" style="border-radius: .8em;" href="/log/5XX">Periksa</a>
                </div>
              </div>
              <div>Belum teratasi</div>
  
            </div>
          </div>
        </div>
        <div class="form-group default-card">
          <h3 class="primary-title mb-4">Saring Data</h3>
          <form
            id="login"
            action="#"
            method="POST"
          >
            <input
              type="hidden"
              name="_token"
              value="fdtSaZ3vrTuHh7acUL5X2QH4JGZDJ17irDMLWkvS"
            />
            <div class="mb-3">
              <label for="kata kunci pencarian" class="form-label"
                >Kata Kunci</label
              >
              <input
                name="endpoint"
                type="text"
                placeholder="Alamat Endpoint / Response Code  "
                class="form-control"
                required
                bind:value={filters}
                minlength="3"
              />
            </div>
            <div class="mb-3">
              <div class="mb-2">
                <label for="exampleInputPassword1" class="form-label"
                  >Tanggal Awal</label
                >
                <input name="start_date" type="date" bind:value={startDate} class="form-control" required/>
              </div>
              <div class="mb-2">
                <label for="exampleInputPassword1" class="form-label"
                  >Tanggal Akhir</label
                >
                <input
                  name="end_date"
                  type="date"
                  class="form-control"
                  bind:value={endDate}
                  required
                />
              </div>
            </div>
  
            <a id="list" class="btn btn-primary mt-2 w-100" href="/#list">Tampilkan</a>
          </form>
        </div>
      </div>
      <div class="col-lg-7 col-12 pe-4">
        <div class="default-card">
          <h3 class="primary-title mb-4">Statistik Komunikasi API</h3>
          <div class="tags mt-4">
            <ul class="item">
              <li>
                <div class="icon bg-blue" />
                <p class="title">Success Response</p>
              </li>
              <li>
                <div class="icon bg-orange" />
                <p class="title">Error Response</p>
              </li>
            </ul>
          </div>
          <DashboardChart />
        </div>
      </div>
    </div>
    <div class="row basic-form my-5">
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
                        {#each filtered as l, no}
                          <tr class="align-middle even">
                            <th scope="row" class="sorting">{(no += 1)}</th>
                            <td>
                              <!-- { l.created_at} -->
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
  
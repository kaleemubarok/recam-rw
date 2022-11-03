<script>

	import chartjs from 'chart.js/auto';
	import { onMount } from 'svelte';
  import {format} from 'date-fns';
  import { env } from '$env/dynamic/public';

	$:chartSukses = [];
	$:chartGagal = [];
	$:chartLabels = [];
	let ctx, chartCanvas;
  let res = [];

	onMount(async () => {
      const ch = await fetch(env.PUBLIC_API_ENDPOINT+`/route/chart`)
      res = await ch.json();
      res.chart.forEach(e => {
        const tgl = format(new Date(e.label),"dd MMM yy");
        chartLabels.push(tgl);
        chartSukses.push(e.sukses);
        chartGagal.push(e.gagal);
      });
      // console.log(chartSukses);
      // console.log(chartGagal);
      // console.log(chartLabels);

		  ctx = chartCanvas.getContext('2d');
			
      var chart = new chartjs(ctx, {
				type: 'line',
				data: {
						labels: chartLabels,
            datasets: [{
                    data: chartSukses,
                    label: 'Success',
                    fill: false,
                    tension: parseFloat('0') * 0.2 + 0.6,
                    borderWidth: 3,
                    pointBorderWidth: 3,
                    pointRadius: 4 + Number('0') * 1,
                    pointBackgroundColor: '#fff',
                    pointHoverBorderColor: '#fff',
                    borderColor: '#2447F9',
                    pointBorderColor: '#2447F9',
                    pointHoverBackgroundColor: '#2447F9',
                },
                {
                    data: chartGagal,
                    label: 'Error',
                    fill: false,
                    tension: parseFloat('1') * 0.2 + 0.6,
                    borderWidth: 3,
                    pointBorderWidth: 3,
                    pointRadius: 4 + Number('1') * 1,
                    pointBackgroundColor: '#fff',
                    pointHoverBorderColor: '#fff',
                    borderColor: '#F4A42B',
                    pointBorderColor: '#F4A42B',
                    pointHoverBackgroundColor: '#F4A42B',
                },],
				},
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
						animations: {
							tension: {
								duration: 5000,
								easing: 'linear',
								from: 1,
								to: 0,
								loop: true
							}
						},
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (val) {
                            return Number.isInteger(val) ? val : null;
                        }
                    }
                }
            }
        }
		});

	});

  // console.log()
</script>

<canvas bind:this={chartCanvas} id="myChart"></canvas>

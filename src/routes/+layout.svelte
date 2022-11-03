<script>
	import { page } from '$app/stores';
	import LoginForm from '$lib/LoginForm.svelte';
	import authToken from '$lib/auth'

	const deleteLocalStorage = () => {
		confirm("Yakin ingin keluar?") ? (authToken.set(null)):authToken;
	}

	let initDisplay = 'display:none';

	$:loginFormDisplay = initDisplay;
	setTimeout(() => {
		initDisplay = 'display:"true"';
	}, 1000);
</script>

<head>
	<style>
		@media screen and (max-width: 575px) {
			.intercom-lightweight-app-launcher {
				bottom: 120px !important;
			}
		}
	</style>
	<title>ReCAM</title>

	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="/nd.css" />
	<link rel="stylesheet" href="/global.css" />
</head>

<body>
	{#if $authToken != null && $authToken.toLowerCase().includes('bearer')}
	
		<div class="sticky-top bg-nav" style="box-shadow: rgba(17, 12, 46, 0.1) 0px 48px 60px 0px;">
			<nav class="navbar navbar-expand-xl navbar-light py-4 navbar-nd d-flex">
				<div class="container-fluid">
					<b><a href="/" class="navbar-brand"> ReCAM</a></b>Retrial Communication and API Management

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav right-menu  few-menu  ms-auto mb-2 mb-lg-0 d-flex flex-column-reverse flex-xl-row justify-content-end align-items-center">
							<li class="nav-item d-none d-sm-flex flex-column justify-content-start align-items-start">
								<div>
									<span class="user-name">Hi there!</span>
									<img class="user-photo" src="/default-avatar.svg" alt="Hi there" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<hr style="background: #2447f9; opacity: 0.2"/>
		</div>
		<!-- sidebar section -->
		<section class="sidebar-nd d-none d-sm-block d-print-none" id="sidebar___nd">
			<div class="content">
				<div class="menus">
					<div
						class="item"
						class:active={$page.url.pathname === '/' || $page.url.pathname.includes('/log/')}
					>
						{#if $page.url.pathname === '/' || $page.url.pathname.includes('/log/')}
							<img src="/ic_basic_progress_blue.svg" alt="Dashboard" class="icon" />
						{:else}
							<img src="/ic_basic_progress_gray.svg" alt="Dashboard" class="icon" />
						{/if}
						<p>
							<a href="/">Dashboard</a>
						</p>
					</div>
					<div class="item" class:active={$page.url.pathname.includes('/route')}>
						{#if $page.url.pathname.includes('/route')}
							<img src="/ic_basic_route_blue.svg" alt="Rute" class="icon" />
						{:else}
							<img src="/ic_basic_route_gray.svg" alt="Rute" class="icon" />
						{/if}
						<p>
							<a href="/route">Route</a>
						</p>
					</div>
					<div class="item" class:active={$page.url.pathname.includes('/logout')}>
						<img src="/ic_basic_settings_gray.svg" alt="Logout" class="icon" />
						<p>
							<!-- old is /login -->
							<a href="/" on:click={deleteLocalStorage}>Logout</a>
							<!-- <span on:click={deleteLocalStorage}>Logout</span> -->
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- mobile layout -->
		<section class="mobile-layout-nd d-block d-sm-none">
			<div class="row bottom-navigation">
				<div class="col-lg-12 col-12">
					<div class="default-card-mobile" style="background: #2447f9; opacity: 80%;">
						<div class="row justify-content-center">
							<div class="col-3 item-menu text-center">
								<a
									href="/"
									class={$page.url.pathname == '/' || $page.url.pathname == '/log/'
										? 'text-white   '
										: 'text-grey'}
								>
									<svg
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M2.1875 16.625C2.1875 21.6991 6.30088 25.8125 11.375 25.8125H16.625C21.6991 25.8125 25.8125 21.6991 25.8125 16.625V11.375C25.8125 6.30088 21.6991 2.1875 16.625 2.1875H11.375C6.30088 2.1875 2.1875 6.30088 2.1875 11.375V16.625ZM11.375 0C5.09276 0 0 5.09276 0 11.375V16.625C0 22.9072 5.09276 28 11.375 28H16.625C22.9072 28 28 22.9072 28 16.625V11.375C28 5.09276 22.9072 0 16.625 0H11.375Z"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M21.7734 9.7266C22.2005 10.1537 22.2005 10.8463 21.7734 11.2734L15.3567 17.6901C14.9296 18.1172 14.2371 18.1172 13.8099 17.6901L11.0833 14.9635L7.7734 18.2734C7.34626 18.7005 6.65374 18.7005 6.2266 18.2734C5.79947 17.8463 5.79947 17.1537 6.2266 16.7266L10.3099 12.6433C10.7371 12.2161 11.4296 12.2161 11.8567 12.6433L14.5833 15.3699L20.2266 9.7266C20.6537 9.29947 21.3463 9.29947 21.7734 9.7266Z"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M17.2812 10.5C17.2812 9.89594 17.7709 9.40625 18.375 9.40625H21C21.6041 9.40625 22.0938 9.89594 22.0938 10.5V13.125C22.0938 13.7291 21.6041 14.2188 21 14.2188C20.3959 14.2188 19.9062 13.7291 19.9062 13.125V11.5938H18.375C17.7709 11.5938 17.2812 11.1041 17.2812 10.5Z"
											fill="currentColor"
										/>
									</svg>
								</a>
							</div>
							<div class="col-3 item-menu text-center">
								<a href="/route" class={$page.url.pathname == '/route' ? 'text-white' : 'text-grey'}
									>
									<svg
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M2.1875 16.625C2.1875 21.6991 6.30088 25.8125 11.375 25.8125H16.625C21.6991 25.8125 25.8125 21.6991 25.8125 16.625V11.375C25.8125 6.30088 21.6991 2.1875 16.625 2.1875H11.375C6.30088 2.1875 2.1875 6.30088 2.1875 11.375V16.625ZM11.375 0C5.09276 0 0 5.09276 0 11.375V16.625C0 22.9072 5.09276 28 11.375 28H16.625C22.9072 28 28 22.9072 28 16.625V11.375C28 5.09276 22.9072 0 16.625 0H11.375Z"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13.5625 19.6875H8.3125V20.5625H13.5625V19.6875ZM7.875 17.5C6.9085 17.5 6.125 18.2835 6.125 19.25V21C6.125 21.9665 6.9085 22.75 7.875 22.75H14C14.9665 22.75 15.75 21.9665 15.75 21V19.25C15.75 18.2835 14.9665 17.5 14 17.5H7.875Z"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M25.375 22.9688H2.625V20.7812H25.375V22.9688Z"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M14.397 7.875C14.397 7.27094 14.8867 6.78125 15.4907 6.78125H20.125C20.7291 6.78125 21.2188 7.27094 21.2188 7.875C21.2188 8.47906 20.7291 8.96875 20.125 8.96875H15.4907C14.8867 8.96875 14.397 8.47906 14.397 7.875ZM9.40625 12.25C9.40625 11.6459 9.89594 11.1562 10.5 11.1562H20.125C20.7291 11.1562 21.2188 11.6459 21.2188 12.25C21.2188 12.8541 20.7291 13.3438 20.125 13.3438H10.5C9.89594 13.3438 9.40625 12.8541 9.40625 12.25Z"
											fill="currentColor"
										/>
									</svg>
								</a>
							</div>
							<div class="col-3 item-menu text-center">
								<a href="/logout" class={$page.url.pathname == '/route' ? 'text-white' : 'text-grey'}
									>
									<img src="/ic_basic_settings_gray.svg" alt="logot"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<link
			rel="stylesheet"
			href="https://cdn.datatables.net/1.10.25/css/dataTables.bootstrap5.min.css"
		/>
		<!-- main seccion content -->
		<main class="main-wrapper">
			<slot />
		</main>
	{:else }
		<div style="{loginFormDisplay};">
			<!-- {$authToken=null} -->
			<LoginForm/>
		</div>
	{/if}

</body>

<style>
	
</style>
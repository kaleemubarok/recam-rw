<script>
	import authToken from "$lib/auth";
    import { env } from '$env/dynamic/public';
    
    let username,password,token,error='';
	async function handleForm() {
    let body = JSON.stringify({
		"name" 		: username,
		"password"	: password,
        });
    try {
      const res = await fetch(env.PUBLIC_API_ENDPOINT+`/user/sign/in`,{
		method: "POST",
		headers: {
		"content-type": "application/json"
		},
        body: body
      });

      const rjson = await res.json();
      if (rjson.error) {
        throw(error=rjson.msg);
      }

      token = rjson.tokens.access;

      //set localStorage
      $authToken = `Bearer ${token}`;

    //   window.location.pathname = "/";
    } catch (error) {
      console.log(error);
    }

  	}
</script>

    <div class="row justify-content-center">
        <div class="mt-5 col-md-3">
            <div class="form-group default-card">
                <h3 class="primary-title mb-4">Mari Masuk</h3>
                <h4 style="color: red; font-size: small;">{error}</h4>
                <form on:submit|preventDefault={handleForm} method="POST">
                <input
                    type="hidden"
                    name="_token"
                    value="fdtSaZ3vrTuHh7acUL5X2QH4JGZDJ17irDMLWkvS"
                />
                <div class="mb-3">
                    <label for="username" class="form-label"
                    >Nama Pengguna</label>
                    <input
                    name="username"
                    type="text"
                    placeholder="Nama Pengguna / Alamat Email"
                    class="form-control"
                    bind:value={username}
                    required
                    minlength="1"
                    />
                </div><div class="mb-3">
                    <label for="kata kunci" class="form-label"
                    >Kata Kunci</label
                    >
                    <input
                    name="password"
                    type="password"
                    placeholder="Kata Sandi / Password  "
                    class="form-control"
                    bind:value={password}
                    required
                    minlength="1"
                    />
                </div>

                <button type="submit" on:click={error=''} class="btn btn-primary mt-2 w-100" >Kirimkan</button>
                </form>
            </div>
        </div>
    </div>
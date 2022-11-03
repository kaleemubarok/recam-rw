<script>
	import authToken from "$lib/auth";
    // console.log('Apaantuch '+$authToken)
    
    if ($authToken===null) {
      console.log("!$authToken "+!$authToken)
      window.location.href = "/login";
    }
</script>

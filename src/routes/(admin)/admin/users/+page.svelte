<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.session);
</script>

<form action="?/register" method="POST">
	<input type="email" name="email" placeholder="email" />
	<input type="password" name="password" placeholder="password" />
	<input type="submit" value="crear usuario" />
</form>

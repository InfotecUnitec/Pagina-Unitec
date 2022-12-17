<script lang="ts">
	import AdminNavbar from '$lib/components/AdminNavbar.svelte';
	import AdminSidebar from '$lib/components/AdminSidebar.svelte';
	import AdminDrawer from '$lib/components/AdminDrawer.svelte';
	import type { LayoutData } from './$types';

	let showDrawer: boolean = false;

	export let data: LayoutData;
</script>

<AdminNavbar
	on:click={() => {
		showDrawer = !showDrawer;
	}}
/>
<div class="flex h-screen pt-14">
	<div class="flex">
		<AdminSidebar />
		{#if showDrawer}
			<AdminDrawer />
		{/if}
	</div>
	<main class="bg-white w-full p-10">
		<slot />
	</main>
	{#if data.session}
		<form method="POST" action="/logout">
			<button type="submit">salir</button>
		</form>
	{/if}
</div>

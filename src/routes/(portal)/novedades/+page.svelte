<script lang="ts">
	import SectionNovedades from '$lib/components/portal/SectionNovedades.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<main class="max-w-screen overflow-x-hidden overflow-y-hidden">
	<SectionNovedades novedades={data.novedades} sectionClass="mt-20 mb-8" />
</main>

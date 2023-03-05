<script lang="ts">
	import SectionHero from '$lib/components/portal/SectionHero.svelte';
	import SectionInfo from '$lib/components/portal/SectionInfo.svelte';
	import SectionNovedades from '$lib/components/portal/SectionNovedades.svelte';
	import SectionSectores from '$lib/components/portal/SectionSectores.svelte';
	import SectionMap from '$lib/components/portal/SectionMap.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="max-w-screen overflow-x-hidden overflow-y-hidden">
	<SectionHero headerUrl={data.headerUrl} />
	<SectionInfo />
	<SectionSectores sectores={data.sectores} />
	<SectionNovedades novedades={data.novedades} sectionClass="mb-10" />
	<SectionMap />
</main>

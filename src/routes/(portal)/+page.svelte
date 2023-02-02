<script lang="ts">
	import Navbar from '$lib/components/portal/Navbar.svelte';
	import Footer from '$lib/components/portal/Footer.svelte';
	import SectionHero from '$lib/components/portal/SectionHero.svelte';
	import SectionInfo from '$lib/components/portal/SectionInfo.svelte';
	import SectionNovedades from '$lib/components/portal/SectionNovedades.svelte';
	import SectionSectores from '$lib/components/portal/SectionSectores.svelte';
	import SectionMap from '$lib/components/portal/SectionMap.svelte';
</script>

<Navbar />
<main class="max-w-screen overflow-x-hidden">
	<SectionHero />
	<SectionInfo />
	<SectionSectores />
	<SectionNovedades />
	<SectionMap />
</main>
<Footer />

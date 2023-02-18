<script lang="ts">
	import Navbar from '$lib/components/portal/Navbar.svelte';
	import Footer from '$lib/components/portal/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<Navbar />
<main class="max-w-screen overflow-x-hidden h-screen pt-24">
	<div class="flex h-full">
		<aside class="w-1/4 flex flex-col items-center pt-10 border-r border-stone-300 gap-3">
			<img alt="logo" src={data.sector.logo} class="rounded-full aspect-square w-4/6" />
			<p class="text-xl font-medium text-stone-700">Integrantes</p>
			<div>
				{#each data.sector.integrantes as integrante}
					<p class="text-xl font-light text-stone-700">{integrante.name}</p>
				{/each}
			</div>
		</aside>
		<article class="w-3/4 p-10">
			<h1 class="text-3xl text-sky-500 font-bold">{data.sector.name}</h1>
			<p class="text-xl font-light text-stone-700 pt-5">{data.sector.descripcion}</p>
			<p class="text-xl font-light text-stone-700 pt-5">{data.sector.informacion}</p>
			<h1 class="text-2xl text-sky-500 font-bold pt-10">¿Cual es nuestro objetivo?</h1>
			<p class="text-xl font-light text-stone-700 pt-5">{data.sector.objetivo}</p>
		</article>
	</div>
</main>
<Footer />

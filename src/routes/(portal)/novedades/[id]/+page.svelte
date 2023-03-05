<script lang="ts">
	import type { PageData } from './$types';
	import Section from '$lib/components/portal/Section.svelte';

	export let data: PageData;
	// const novelty = JSON.parse(data.novelty);
	console.log(data);
</script>

<Section
	title={data.novedad?.title}
	config={{
		titleColor: 'text-sky-600 capitalize',
		backgroundColor: 'bg-transparent'
	}}
>
	<div
		class=" bg-neutral-50  rounded-lg shadow-lg p-10 gap-10 relative z-10 w-11/12 m-auto h-11/12 mt-10 mb-10"
	>
		<div class="p-10 grid grid-cols-2 grid-rows-4-custom">
			<div class=" row-start-1 row-span-1">
				<p class="text-gray-500 text-sm">{data.novedad?.date}</p>
				<h2
					class="capitalize mb-2 tracking-tight text-sky-600 text-3xl font-bold leading-none md:text-4xl lg:text-5xl"
				>
					{data.novedad?.title}
				</h2>
			</div>
			<div class="row-start-2 row-span-3">
				<div
					class="text-justify indent-5 mb-3 text-lg font-light text-gray-500 md:text-xl page-content"
				>
					{@html data.novedad?.body}
				</div>
			</div>
			<div class="col-start-2 row-start-2 row-span-2">
				<img
					class="rounded-lg p-5 w-5/6 h-auto m-auto pt-0 mt-0"
					src={data.novedad?.image}
					alt="Imagen de la Novedad"
				/>
			</div>
		</div>
	</div>

	<style>
		.grid-rows-4-custom {
			grid-template-rows: 0.2fr repeat(3, minmax(0, 1fr));
		}
	</style>
</Section>

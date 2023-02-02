<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import type { PostgrestResponse } from '@supabase/supabase-js';

	let sectores: { nombre: string; descripcion: string; logo: string }[] = [];
	let sectorSelected = 0;

	(async () => {
		const {
			data,
			error
		}: PostgrestResponse<{
			created_at: string;
			integrantes: JSON;
			descripcion: string;
			id: number;
			logo: string;
			name: string;
		}> = await supabaseClient.from('sectores').select('*');

		if (data)
			sectores = data.map((sector) => {
				const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(sector.logo);
				return {
					nombre: sector.name,
					descripcion: sector.descripcion,
					logo: data.publicUrl ? data.publicUrl : 'empty.png'
				};
			});
	})();
</script>

<section class="h-[500px] flex flex-col justify-center items-center gap-10  bg-sky-100">
	<div class="pt-20">
		<h1 class="text-4xl font-extrabold text-sky-500 text-center">Estructura</h1>
		<p class="text-xl font-light texto-gray-600 text-center pt-5">
			Contamos con 5 espacios de extensión separados conforme las distintas actividades que se
			realizan
		</p>
	</div>
	<div class="grow flex flex-col gap-20">
		<div class="flex gap-10">
			{#each sectores as sector, i}
				<img
					src={sector.logo}
					alt="logo de un sector"
					class:sector_selected={i == sectorSelected}
					class="w-32 h-32 rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer duration-75"
					on:click={() => (sectorSelected = i)}
				/>
			{/each}
		</div>
		{#if sectores.length !== 0}
			<p class="text-xl font-light texto-gray-600 text-center">
				{sectores[sectorSelected].descripcion}
			</p>
		{/if}
	</div>
</section>

<style lang="postcss">
	.sector_selected {
		@apply opacity-100;
	}
</style>

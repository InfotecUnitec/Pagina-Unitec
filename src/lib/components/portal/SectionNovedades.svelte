<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import type { PostgrestResponse } from '@supabase/supabase-js';
	import CardNovedad from './CardNovedad.svelte';

	// importar esto en la carga de la pagina
	let novedades: { date: string; title: string; image: string }[] = [];

	(async () => {
		const {
			data,
			error
		}: PostgrestResponse<{
			created_at: string;
			body: string;
			title: string;
			id: number;
			imagen: string;
		}> = await supabaseClient.from('novedades').select('*');

		console.log(data, error);

		if (data)
			novedades = data.map((novedad) => {
				const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(novedad.imagen);
				return {
					date: new Date(novedad.created_at).toLocaleDateString(),
					title: novedad.title,
					image: data.publicUrl ? data.publicUrl : 'empty.png'
				};
			});
	})();
</script>

<section class="bg-white h-screen flex flex-col items-center gap-5">
	<h1 class="text-center pt-10 text-4xl font-semibold text-sky-500">Ultimas novedades</h1>
	<div class=" flex-col w-2/3 items-center justify-center gap-5 grid grid-cols-2">
		{#each novedades as novedad}
			<CardNovedad title={novedad.title} image={novedad.image} date={novedad.date} />
		{/each}
	</div>
</section>

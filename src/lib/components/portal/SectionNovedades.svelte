<script lang="ts">
	import CardNovedad from './CardNovedad.svelte';

	const novedades = [
		{
			image:
				'https://azswuudqsjlaocksktty.supabase.co/storage/v1/object/public/images/public/hero.jpg',
			date: '2022-11-11',
			title: 'una novedad'
		},
		{
			image:
				'https://azswuudqsjlaocksktty.supabase.co/storage/v1/object/public/images/public/hero.jpg',
			date: '2022-11-11',
			title: 'una novedad'
		},
		{
			image:
				'https://azswuudqsjlaocksktty.supabase.co/storage/v1/object/public/images/public/hero.jpg',
			date: '2022-11-11',
			title: 'una novedad'
		},
		{
			image:
				'https://azswuudqsjlaocksktty.supabase.co/storage/v1/object/public/images/public/hero.jpg',
			date: '2022-11-11',
			title: 'una novedad'
		}
	];
</script>

<section class="bg-sky-100 h-screen flex flex-col items-center gap-5">
	<h1 class="text-center pt-10 text-4xl font-semibold ">Ultimas novedades</h1>
	<div class=" flex-col w-2/3 items-center justify-center gap-5 grid grid-cols-2">
		{#each novedades as novedad}
			<CardNovedad title={novedad.title} image={novedad.image} date={novedad.date} />
		{/each}
	</div>
</section>

<script lang="ts">
	export let sectores: { nombre: string; descripcion: string; logo: string }[] = [];
	let sectorSelected = 0;

</script>

<section id="section-sectores" class="h-auto flex flex-col justify-center items-center gap-10  ">
	<div class="pt-20">
		<h1 class="text-4xl font-extrabold text-sky-500 text-center">Estructura</h1>
		<p class="text-xl font-light texto-gray-600 text-center pt-5">
			Contamos con 7 espacios de extensión separados conforme las distintas actividades que se
			realizan
		</p>
	</div>
	<div class="grow flex flex-col items-center gap-20">
		<div class="grid grid-cols-7 gap-6 max-lg:grid-cols-4">
			{#each sectores as sector, i}
				<button on:click={() => (sectorSelected = i)}>
					<img
						src={sector.logo}
						alt="logo de un sector"
						class:sector_selected={i == sectorSelected}
						class="w-32 h-32 rounded-full opacity-50 hover:opacity-100 bg-white  hover:cursor-pointer duration-75"
					/>
				</button>
			{/each}
		</div>
		{#if sectores.length !== 0}
			<div class="pb-10">
				<p class="text-xl font-light text-gray-600 text-center px-20">
					{sectores[sectorSelected].descripcion}
				</p>
				<a class="absolute right-10" href={`/sectores/${sectores[sectorSelected].nombre}`}
					>Ver mas
				</a>
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
	.sector_selected {
		@apply opacity-100;
	}
</style>

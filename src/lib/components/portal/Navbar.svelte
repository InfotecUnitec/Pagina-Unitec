<script lang="ts">
	const menus = [
		{
			name: 'Sobre nosotros',
			href: '#'
		},
		{
			name: 'Ultimas novedades',
			href: '/novedades'
		},
		{
			name: 'Sectores',
			href: '#'
		}
	];
</script>

<nav class=" flex w-full h-24 justify-between items-center  fixed z-50 bg-white shadow-md">
	<div class="ml-10">
		<a href="/"><img src="/unitec.svg" class="w-14" alt="logo de unitec" /></a>
	</div>
	<ul class="flex grow justify-end gap-10 text-white mr-10">
		{#each menus as menu}
			<li class=" text-sky-700 p-2 pl-5 pr-5 hover:cursor-pointer hover:text-sky-400 ">
				<a href={menu.href}>{menu.name}</a>
			</li>
		{/each}
	</ul>
</nav>

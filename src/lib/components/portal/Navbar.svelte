<script lang="ts">
	const menus = [
		{
			name: 'juan',
			href: '#'
		},
		{
			name: 'juan',
			href: '#'
		},
		{
			name: 'juan',
			href: '#'
		}
	];
</script>

<nav class=" flex w-full h-24 justify-between items-center bg-slate-800">
	<div class="ml-10">
		<a href="/"><img src="/unitec.svg" class="w-14" alt="logo de unitec" /></a>
	</div>
	<ul class="flex grow justify-center gap-10 text-white">
		{#each menus as menu}
			<li>
				<a href={menu.href} class="hover:text-sky-300">{menu.name}</a>
			</li>
		{/each}
	</ul>
</nav>

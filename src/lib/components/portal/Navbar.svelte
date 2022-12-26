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

<nav class=" flex w-full h-24 justify-between items-center bg-transparent fixed">
	<div class="ml-10">
		<a href="/"><img src="/unitec.svg" class="w-14" alt="logo de unitec" /></a>
	</div>
	<ul class="flex grow justify-end gap-10 text-white mr-10">
		{#each menus as menu}
			<li
				class="bg-white text-black p-2 pl-5 pr-5 rounded-full hover:cursor-pointer hover:-translate-y-1 shadow-xl"
			>
				<a href={menu.href}>{menu.name}</a>
			</li>
		{/each}
	</ul>
</nav>

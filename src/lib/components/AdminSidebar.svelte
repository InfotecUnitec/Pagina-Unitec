<script lang="ts">
	import { ChartBar } from 'svelte-hero-icons';

	import AdminSidebarButton from './AdminSidebarButton.svelte';

	let menus = [
		{
			href: '/admin/users',
			icon: ChartBar
		},
		{
			href: '#',
			icon: ChartBar
		},
		{
			href: '#',
			icon: ChartBar
		},
		{
			href: '#',
			icon: ChartBar
		},
		{
			href: '#',
			icon: ChartBar
		}
	];
</script>

<aside
	class="h-full w-12 flex flex-col gap-2 items-center p-2 bg-white border-r border-gray-300 relative z-20"
>
	{#each menus as menu}
		<AdminSidebarButton icon={menu.icon} />
	{/each}
</aside>

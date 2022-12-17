<script lang="ts">
	import { Icon, MenuAlt2 } from 'svelte-hero-icons';
</script>

<nav class="bg-white h-14 fixed top-0 left-0 w-screen border-b border-gray-300 flex z-20">
	<button class="text-gray-500 w-12 flex justify-center items-center " on:click>
		<Icon src={MenuAlt2} class="w-8 h-8" />
	</button>
</nav>

<script lang="ts">
	import { Icon } from 'svelte-hero-icons';
	import type { IconSource } from 'svelte-hero-icons';

	export let icon: IconSource;
</script>

<a
	class=" bg-white w-8 h-8 flex justify-center items-center rounded-lg hover:bg-gray-300 text-gray-500 hover:text-gray-600"
	href="#"
>
	<Icon src={icon} class="w-6 h-6" />
</a>

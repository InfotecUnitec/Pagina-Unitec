<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	const slideHorizontal = (node, { delay = 0, duration = 1000, easing = cubicInOut }) => {
		return {
			delay,
			duration,
			easing,
			css: (t, u) => {
				return `transform: translateX(-${u * 100}%)`;
			}
		};
	};
</script>

<div
	class="absolute top-0 left-0 h-screen w-screen bg-black opacity-25"
	transition:fade={{ duration: 500 }}
/>
<aside
	class="z-10 absolute left-12 top-0 h-full bg-white w-56 border-r border-gray-300 pt-14"
	transition:slideHorizontal={{ duration: 500, delay: 0 }}
>
	<p>drawer</p>
</aside>

<script lang="ts">
	export let overview: string = '';
	export let title: string;
	export let direction = 'center';
	export let config = {
		titleColor: 'text-gray-900',
		backgroundColor: 'bg-white'
	};
</script>

<section class={`h-auto w-full pt-32 ${config.backgroundColor} `}>
	<p
		class={`text-lg font-normal text-gray-500 lg:text-xldark:text-gray-400 ${
			direction == 'center' ? 'text-center' : direction == 'left' ? 'text-left' : 'text-right'
		}`}
	>
		{overview}
	</p>
	<h2
		class={`${
			direction == 'center' ? 'text-center' : direction == 'left' ? 'text-left' : 'text-right'
		} mb-8 text-2xl font-bold tracking-tight leading-none ${
			config.titleColor
		} md:text-3xl lg:text-4xl dark:text-white`}
	>
		{title}
	</h2>
	<slot />
</section>

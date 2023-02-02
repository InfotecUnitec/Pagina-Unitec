<script lang="ts">
	export let image: string;
	export let date: string;
	export let title: string;
	export let href: string = '#';
</script>

<a
	class=" bg-rose-200  relative  w-full h-64 bg-cover shadow-xl hover:-translate-y-2 duration-75 hover:shadow-2xl"
	style={`background-image: url('${image}')`}
	{href}
>
	<div
		class="absolute p-5 bg-white h-2/3 w-1/2 top-1/2 left-10 -translate-y-1/2 flex flex-col justify-center items-center"
	>
		<h3 class="text-xl font-extrabold text-center">{title}</h3>
		<span>{date}</span>
	</div>
</a>

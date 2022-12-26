<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';

	export let headerParagraph: string = 'hola que tal soy un texto que va en el header';
	let src = '';

	onMount(async () => {
		console.log(await supabaseClient.from('foo').select('*'));
		const { data } = await supabaseClient.storage.from('images').getPublicUrl('public/hero.jpg');
		src = data.publicUrl;
	});
</script>

<header style={`background-image: url('${src}')`} class="h-screen w-screen bg-cover">
	<div
		class="gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
	>
		<img src="/unitec.svg" alt="logo de unitec" />
		<h1 class="text-4xl font-extrabold tracking-tight text-slate-600">{headerParagraph}</h1>
	</div>
</header>

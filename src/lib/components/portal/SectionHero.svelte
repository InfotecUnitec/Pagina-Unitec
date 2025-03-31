<script lang="ts">
	export let headerParagraph: string = 'UNITEC';
	export let headerUrl: string = '';
</script>

<header style={`background-image: url('${headerUrl}')`} class="h-screen w-screen bg-cover">
	<div
		class="gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
	>
		<img src="/unitec.svg" alt="logo de unitec" />
		<h1 class="text-4xl font-extrabold tracking-tight text-black">{headerParagraph}</h1>
	</div>
</header>

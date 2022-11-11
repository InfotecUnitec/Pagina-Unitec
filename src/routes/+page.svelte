<script lang="ts">
	import { stringify } from 'postcss';
	import { dataset_dev } from 'svelte/internal';
	import { supabase } from '../supabaseClient.js';

	(async () => {
		console.log(await supabase.from('foo').select('*'));
	})();
</script>

{#await supabase.from('foo').select('*') then { data, error }}
	{#each data as row}
		<p class="bg-sky-600">{JSON.stringify(row)}</p>
	{:else}
		<p class="bg-rose-600">Error: {error}</p>
	{/each}
{/await}

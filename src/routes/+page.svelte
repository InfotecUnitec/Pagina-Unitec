<script lang="ts">
	import { supabase } from '../supabaseClient.js';

	(async () => {
		console.log(await supabase.from('foo').select('*'));
	})();
</script>

<p class="bg-rose-600">Supabase + Tailwind</p>

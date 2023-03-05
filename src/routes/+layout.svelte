<script>
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../app.css';
	import Navbar from '$lib/components/portal/Navbar.svelte';
	import Footer from '$lib/components/portal/Footer.svelte';

	// si el estado de autenticacion cambia se invalida la carga de todas las page
	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Navbar />
<slot />
<Footer />

import '$lib/supabase';
import { authenticateUser } from '$lib/auth';
import { redirect, type Handle } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const handle: Handle = async ({ event, resolve }) => {
	/*	event.locals.user = await authenticateUser(event);

	console.log('hook', event.url.pathname);
	if (event.url.pathname.startsWith('/admin')) {
		console.log('hook redirect');
		if (!event.locals.user) throw redirect(303, '/login');
	}

	const response = await resolve(event);

	return response;
*/

	const { session, supabaseClient } = await getSupabase(event);

	event.locals.sb = supabaseClient;
	event.locals.session = session;

	return resolve(event);
};

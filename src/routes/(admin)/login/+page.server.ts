import { AuthApiError } from '@supabase/supabase-js';
import { invalid, redirect } from '@sveltejs/kit';
import type { Actions, Action } from './$types';

const login: Action = async ({ cookies, request, locals }) => {
	const body = Object.fromEntries(await request.formData());

	const { data, error: err } = await locals.sb.auth.signInWithPassword({
		email: body.email as string,
		password: body.password as string
	});

	if (err) {
		if (err instanceof AuthApiError && err.status == 400) {
			return invalid(400, {
				error: 'invalid credentials'
			});
		}
		return invalid(500, {
			message: 'server error, try again'
		});
	}

	/*	
	console.log(data);

	console.log('action');
	cookies.set('jwt', 'tokenadmin', {
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
		httpOnly: true,
		secure: false,
		sameSite: 'strict'
	});
*/
	throw redirect(303, '/admin');
};

export const actions: Actions = {
	login
};

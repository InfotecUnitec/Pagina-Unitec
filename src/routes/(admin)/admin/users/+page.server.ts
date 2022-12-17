import { AuthApiError } from '@supabase/supabase-js';
import { redirect, invalid } from '@sveltejs/kit';
import type { Actions, Action } from './$types';

const register: Action = async ({ locals, request }) => {
	const body = Object.fromEntries(await request.formData());

	const { data, error } = await locals.sb.auth.signUp({
		email: body.email as string,
		password: body.password as string
	});

	console.log(error);
	if (error) {
		if (error instanceof AuthApiError && error.status === 400) {
			return invalid(400, {
				error: 'Invalid email or password'
			});
		}
		return invalid(500, {
			error: 'server error, try again'
		});
	}

	/*
	console.log(data);

	console.log('register');
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
	register
};

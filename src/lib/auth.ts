import type { RequestEvent } from '@sveltejs/kit';

export const authenticateUser = async ({ cookies }: RequestEvent) => {
	const token = cookies.get('jwt');

	if (token == 'tokenadmin') {
		return {
			user: 'admin-mock'
		};
	}

	return null;
};

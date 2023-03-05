import type { PageLoad } from './$types';

import { supabaseClient } from '$lib/supabase';
import type { PostgrestResponse } from '@supabase/supabase-js';

export const load: PageLoad = async () => {
	let novedades: { date: string; title: string; image: string; id: number }[] = [];
	const {
		data: dataNovedades,
		error: errorNovedades
	}: PostgrestResponse<{
		created_at: string;
		body: string;
		title: string;
		id: number;
		imagen: string;
	}> = await supabaseClient.from('novedades').select('*');
	if (dataNovedades)
		novedades = dataNovedades.map((novedad) => {
			const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(novedad.imagen);
			return {
				date: new Date(novedad.created_at).toLocaleDateString(),
				title: novedad.title,
				image: data.publicUrl ? data.publicUrl : 'empty.png',
				id: novedad.id
			};
		});
	return { novedades };
};

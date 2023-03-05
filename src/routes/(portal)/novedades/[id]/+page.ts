import type { PageLoad } from './$types';

import { supabaseClient } from '$lib/supabase';
import type { PostgrestResponse } from '@supabase/supabase-js';

export const load: PageLoad = async ({ params }) => {
	const {
		data: dataNovedades,
		error: errorNovedades
	}: PostgrestResponse<{
		created_at: string;
		body: string;
		title: string;
		id: number;
		imagen: string;
	}> = await supabaseClient.from('novedades').select('*').eq('id', params.id).maybeSingle();
	console.log(dataNovedades);
	if (dataNovedades) {
		const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(dataNovedades.imagen);
		return {
			novedad: {
				date: new Date(dataNovedades.created_at).toLocaleDateString(),
				title: dataNovedades.title,
				image: data.publicUrl ? data.publicUrl : 'empty.png',
				body: dataNovedades.body,
				id: dataNovedades.id
			}
		};
	}
};

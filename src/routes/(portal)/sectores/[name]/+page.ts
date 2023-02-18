import { supabaseClient } from '$lib/supabase';
import type { PostgrestResponse } from '@supabase/supabase-js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let sector: { name: string; descripcion: string; logo: string; integrantes: JSON } | undefined;

	const {
		data: dataSectores,
		error
	}: PostgrestResponse<{
		created_at: string;
		integrantes: JSON;
		descripcion: string;
		id: number;
		logo: string;
		name: string;
	}> = await supabaseClient.from('sectores').select('*').eq('name', params.name);

	if (dataSectores) {
		sector = dataSectores[0];
		const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(sector.logo);
		sector.logo = data.publicUrl ? data.publicUrl : 'empty.png';
	}

	return {
		sector: sector ? sector : {}
	};
};

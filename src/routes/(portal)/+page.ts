import type { PageLoad } from './$types';

import { supabaseClient } from '$lib/supabase';
import type { PostgrestResponse } from '@supabase/supabase-js';

export const load: PageLoad = async () => {
	let novedades: { date: string; title: string; image: string; id: number }[] = [];
	let sectores: { nombre: string; descripcion: string; logo: string }[] = [];

	const { data: headerData } = await supabaseClient.storage
		.from('imagenes')
		.getPublicUrl('hero.jpg');

	const {
		data: dataNovedades,
		error: errorNovedades
	}: PostgrestResponse<{
		created_at: string;
		body: string;
		title: string;
		id: number;
		imagen: string;
	}> = await supabaseClient
		.from('novedades')
		.select('*')
		.order('created_at', { ascending: false })
		.limit(4);
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
	}> = await supabaseClient.from('sectores').select('*');

	if (dataSectores)
		sectores = dataSectores.map((sector) => {
			const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(sector.logo);
			return {
				nombre: sector.name,
				descripcion: sector.descripcion,
				logo: data.publicUrl ? data.publicUrl : 'empty.png'
			};
		});

	return {
		headerUrl: headerData ? headerData.publicUrl : '',
		novedades,
		sectores
	};
};

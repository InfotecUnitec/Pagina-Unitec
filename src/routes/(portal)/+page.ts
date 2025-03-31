import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	let sectores: { nombre: string; descripcion: string; logo: string }[] = [
		{
			nombre: 'LATE',
			descripcion: ' Laboratorio de Asistencia Técnica a Establecimientos de Educación Especial',
			logo: 'logos/logo-late.png'
		},
		{
			nombre: 'EDETEC',
			descripcion: ' Espacio de extension EDETEC',
			logo: 'logos/logo-edetec.png'
		},
		{
			nombre: 'Proyecto Arduino',
			descripcion: ' Espacio de extension Proyecto Arduino',
			logo: 'logos/logo-arduino.png'
		},
		{
			nombre: 'Adpataciones Inclusivas en 3D',
			descripcion: ' Espacio de extensión Adaptaciones Inclusivas en 3D',
			logo: 'logos/logo-tecnicas3d.png'
		},
		{
			nombre: 'Mecatrónica ',
			descripcion: ' espacio de extensión Mecatronica.',
			logo: 'logos/logo-mecatronica.png'
		},
		{
			nombre: 'LabTIC  ',
			descripcion: 'Espacio de extension LabTIC',
			logo: 'logos/logo-labtic.png'
		},
		{
			nombre: 'Infotec  ',
			descripcion: 'espacio de extension Infotec',
			logo: 'logos/logo-infotec.png'
		}
	];

	return {
		headerUrl: 'banner.jpg',
		sectores
	};
};

// // import { supabaseClient } from '$lib/supabase';
// // import type { PostgrestResponse } from '@supabase/supabase-js';

// export const load: PageLoad = async () => {
// 	let novedades: { date: string; title: string; image: string; id: number }[] = [];
// 	let sectores: { nombre: string; descripcion: string; logo: string }[] = [];

// 	const { data: headerData } = await supabaseClient.storage
// 		.from('imagenes')
// 		.getPublicUrl('hero.jpg');

// 	const {
// 		data: dataNovedades,
// 		error: errorNovedades
// 	}: PostgrestResponse<{
// 		created_at: string;
// 		body: string;
// 		title: string;
// 		id: number;
// 		imagen: string;
// 	}> = await supabaseClient
// 		.from('novedades')
// 		.select('*')
// 		.order('created_at', { ascending: false })
// 		.limit(4);
// 	if (dataNovedades)
// 		novedades = dataNovedades.map((novedad) => {
// 			const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(novedad.imagen);
// 			return {
// 				date: new Date(novedad.created_at).toLocaleDateString(),
// 				title: novedad.title,
// 				image: data.publicUrl ? data.publicUrl : 'empty.png',
// 				id: novedad.id
// 			};
// 		});

// 	const {
// 		data: dataSectores,
// 		error
// 	}: PostgrestResponse<{
// 		created_at: string;
// 		integrantes: JSON;
// 		descripcion: string;
// 		id: number;
// 		logo: string;
// 		name: string;
// 	}> = await supabaseClient.from('sectores').select('*');

// 	if (dataSectores)
// 		sectores = dataSectores.map((sector) => {
// 			const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(sector.logo);
// 			return {
// 				nombre: sector.name,
// 				descripcion: sector.descripcion,
// 				logo: data.publicUrl ? data.publicUrl : 'empty.png'
// 			};
// 		});

// 	return {
// 		headerUrl: headerData ? headerData.publicUrl : '',
// 		novedades,
// 		sectores
// 	};
// };

// import { supabaseClient } from '$lib/supabase';
// import type { PostgrestResponse } from '@supabase/supabase-js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	console.log(params.name);
	let sectores = {
		LATE: {
			name: 'LATE',
			descripcion: ' Laboratorio de Asistencia Técnica a Establecimientos de Educación Especial',
			logo: '/logos/logo-late.png',
			integrantes: [
				{
					name: ' Luis Ferrufino',
					supervisor: true
				},
				{
					name: 'Agustín Nieto',
					supervisor: false
				},
				{
					name: ' Martin Romero',
					supervisor: false
				},
				{
					name: 'Daniel Alejando Fernández',
					supervisor: false
				},
				{
					name: 'Valentín Diego González',
					supervisor: false
				}
			],
			objetivo:
				' en este espacio de extensión se reacondicionan PC, Notebooks, Monitores y periféricos donados por la comunidad para ser entregados a Escuelas de Educación Especial, Organismos, Instituciones y particulares que requieran de dicho equipamiento.'
		},
		EDETEC: {
			name: 'EDETEC',
			descripcion:
				' Espacio de desarrollo de rampas tecnológicas para la accesibilidad e inclusión de PcD',
			logo: '/logos/logo-edetec.png',
			integrantes: [
				{
					name: 'Felipe Simonetti',
					supervisor: true
				},
				{
					name: ' Francisco Navarro',
					supervisor: false
				},
				{
					name: 'Bruno Benitez',
					supervisor: false
				}
			],
			objetivo:
				'espacio de extensión dedicado al desarrollo de adaptaciones tecnológicas para PcD (teclados y mouses adaptados, juguetes; Switch de impacto, comunicadores pictográficos, y otros dispositivos a requerimiento).'
		},
		'Proyecto Arduino': {
			name: 'Proyecto Arduino',
			descripcion:
				' Espacio de desarrollo de rampas tecnológicas para la accesibilidad e inclusión de PcD bajo el uso del microcontrolador Arduino',
			logo: '/logos/logo-arduino.png',
			integrantes: [
				{
					name: 'Diego Cervantes Flores',
					supervisor: true
				},
				{
					name: 'Julieta Alvarez',
					supervisor: false
				}
			],
			objetivo:
				' Espacio de desarrollo de rampas tecnológicas para la accesibilidad e inclusión de PcD bajo el uso del microcontrolador Arduino'
		},
		'Adpataciones Inclusivas en 3D': {
			name: 'Adpataciones Inclusivas en 3D',
			descripcion:
				' Espacio de extensión dedicado a la realización de piezas en 3D como repuesto de las mismas impresoras, Switch y varios a requerimiento de los otros espacios de extensión.',
			logo: '/logos/logo-tecnicas3d.png',
			integrantes: [
				{
					name: 'Francisco Bustos',
					supervisor: true
				},
				{
					name: 'Luciano Macías',
					supervisor: false
				},
				{
					name: 'Gustavo Mamani',
					supervisor: false
				},
				{
					name: ' Víctor Palomar',
					supervisor: false
				},
				{
					name: 'Tomás Naranjo',
					supervisor: false
				}
			],
			objetivo:
				' Espacio de extensión dedicado a la realización de piezas en 3D como repuesto de las mismas impresoras, Switch y varios a requerimiento de los otros espacios de extensión.'
		},
		Mecatrónica: {
			name: 'Mecatrónica',
			descripcion:
				' espacio de extensión dedicado a la investigación vinculada al uso de las Tecnologías de la Información y Comunicación (TIC) dentro del área de la discapacidad entre las que se destacan la de DOMOTICA, ELECTROMEDICINA.',
			logo: '/logos/logo-mecatronica.png',
			integrantes: [
				{
					name: 'Ing. Marcelo Fernández Busse',
					supervisor: true
				},
				{
					name: 'Lic. José Alberto Ferreyra',
					supervisor: true
				},
				{
					name: 'Juan Marcos Malanga',
					supervisor: false
				},
				{
					name: 'Simón López',
					supervisor: false
				},
				{
					name: 'Valentín Atanasof',
					supervisor: false
				}
			],
			objetivo:
				'espacio de extensión dedicado a la investigación vinculada al uso de las Tecnologías de la Información y Comunicación (TIC) dentro del área de la discapacidad entre las que se destacan la de DOMOTICA, ELECTROMEDICINA.'
		},
		LabTIC: {
			name: 'LabTIC',
			descripcion:
				'espacio dedicado a la adaptación de computadoras que son reacondicionadas por el “LATE”, instalando software propietario (desarrollado por la misma área de LabTIC) o software asistivo (lectores de pantalla, sistemas aumentativos y alternativos de comunicación, magnificadores, teclados virtuales, sintetizadores de voz, motores de síntesis de voz, mouses ópticos, etc.) ',
			logo: '/logos/logo-labtic.png',
			integrantes: [
				{
					name: 'Ing. Marcelo Fernández Busse',
					supervisor: true
				},
				{
					name: 'Lic. José Alberto Ferreyra',
					supervisor: true
				},
				{
					name: 'Juan Marcos Malanga',
					supervisor: false
				},
				{
					name: 'Simón López',
					supervisor: false
				},
				{
					name: 'Valentín Atanasof',
					supervisor: false
				}
			],
			objetivo:
				'espacio dedicado a la adaptación de computadoras que son reacondicionadas por el “LATE”, instalando software propietario (desarrollado por la misma área de LabTIC) o software asistivo (lectores de pantalla, sistemas aumentativos y alternativos de comunicación, magnificadores, teclados virtuales, sintetizadores de voz, motores de síntesis de voz, mouses ópticos, etc.)'
		},
		Infotec: {
			name: 'Infotec',
			descripcion:
				'espacio dedicado de extension dedicado al desarrollo web, centralizado en la enseñanza de Javascripr,HTML,CSS y manejo de Bases de Datos a nivel basico.',
			logo: '/logos/logo-infotec.png',
			integrantes: [
				{
					name: 'Camilo Di Paolo',
					supervisor: true
				},
				{
					name: 'Joaquin Fontana',
					supervisor: true
				},
				{
					name: 'Jenaro Luciano Cecacci Porrez',
					supervisor: false
				},
				{
					name: 'Amilcar Catriel Paz',
					supervisor: false
				}
			],
			objetivo:
				'espacio dedicado de extension dedicado al desarrollo web, centralizado en la enseñanza de Javascripr,HTML,CSS y manejo de Bases de Datos a nivel basico.'
		}
	};
	return {
		sector: sectores[params.name]
	};
};
// 	let sector: { name: string; descripcion: string; logo: string; integrantes: JSON } | undefined;

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
// 	}> = await supabaseClient.from('sectores').select('*').eq('name', params.name);

// 	if (dataSectores) {
// 		sector = dataSectores[0];
// 		const { data } = supabaseClient.storage.from('imagenes').getPublicUrl(sector.logo);
// 		sector.logo = data.publicUrl ? data.publicUrl : 'empty.png';
// 	}

// 	return {
// 		sector: sector ? sector : {}
// 	};
// };

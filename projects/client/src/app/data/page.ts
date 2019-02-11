import { Page } from '@designr/core';

export const page: Page[] = [
	{
		id: 1000,
		slug: '/',
		url: 'https://actarian.github.io/designr/#/',
		title: 'Homepage',
		abstract: 'Nam id suscipit tellus. Sed nec massa non mauris semper mattis in eget est.',
		description: '<p>Ut ultrices condimentum urna, et aliquam orci semper ut. Donec eleifend sapien vel vestibulum cursus. Duis luctus ullamcorper risus imperdiet maximus. Vestibulum volutpat mauris diam, eget tempor lorem ultrices a.</p><p>Suspendisse non aliquet arcu. Praesent a enim accumsan orci semper venenatis non eget lorem. Praesent rhoncus molestie lectus id semper.</p>',
		component: 'HomeComponent',
		type: 1,
		active: true,
		meta: {
			title: 'Page Meta Title',
			description: 'Page Meta Description',
			keywords: 'keyword,keyword',
			robots: 'index,follow'
		},
		images: [{
			type: 1,
			description: 'Image description',
			fileName: '1024x400',
			url: 'https://dummyimage.com/1920x1080/313f4c/222c34/',
			id: 0
		}],
		features: [{
			id: 8,
			slug: '/contacts',
			title: 'Contacts',
			abstract: 'Nam id suscipit tellus. Sed nec massa non mauris semper mattis in eget est.',
			type: 1
		}],
		taxonomies: [{
			id: 2,
			name: 'Page Tag',
			type: 0
		}]
	},
	{
		id: 2000,
		slug: '/contacts',
		url: 'https://actarian.github.io/designr/#/contacts',
		title: 'Contacts',
		abstract: 'Nam id suscipit tellus. Sed nec massa non mauris semper mattis in eget est.',
		description: '<h3>Telefono</h3>\r\n\r\n<p>Per informazioni e assistenza nella scelta di acquisto della tua vacanza, contattaci allo&nbsp;<strong>045 9599</strong>.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>Orari</h3>\r\n\r\n<p><strong>Lunedì - Venerdì,&nbsp;</strong><span style=\'line-height: 1.6;\'>dalle 09:00 alle 18:00</span></p>\r\n\r\n<p><strong>Sabato,&nbsp;</strong>dalle 09:00 alle 13:00</p>',
		component: 'ContactComponent',
		type: 6,
		active: true,
		meta: {
			title: 'Richiesta di contatto',
			description: 'Page Meta Description',
			keywords: 'richiesta di contatto, contatto',
			robots: 'index,follow'
		},
		images: [{
			type: 1,
			description: 'Image description',
			fileName: '1024x400',
			url: 'https://dummyimage.com/1920x1080/313f4c/222c34/',
			id: 0
		}],
		related: [{
			id: 0,
			type: 1,
			page: {
				id: 75,
				slug: '/privacy',
				url: 'https://actarian.github.io/designr/#/privacy',
				title: 'Privacy',
				component: 0,
				type: 0,
				active: false
			}
		}],
		features: [{
			id: 8,
			slug: '/',
			title: 'Homepage',
			abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a erat aliquet magna ultricies fermentum non quis ex.',
			type: 1
		}]
	},
];

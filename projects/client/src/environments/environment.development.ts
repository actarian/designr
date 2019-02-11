export enum AuthStrategy {
	Bearer = 0,
	Cookie = 1,
}

export const environment = {
	transition: {
		appId: 'app'
	},
	preboot: {
		appRoot: 'app-component'
	},
	memoryApi: {
		apiBase: 'api/',
		passThruUnknownUrl: true,
		dataEncapsulation: false,
		delay: 0,
		remap: {
			'/user/views': '/lastview',
			'/user/destinations': '/destinations',
		}
	},
	assets: '/assets',
	enableTracing: false,
	public: '/',
	useHash: false,
	useLang: false,
	useMarket: false,
	urlStrategy: '',
	defaultLanguage: 'it',
	defaultMarket: 'it',
	languages: [
		{ id: 1, name: 'Italiano', lang: 'it' }
	],
	authStrategy: AuthStrategy.Cookie,
	production: false,
	useServiceWorker: false,
	editor: true,
	plugins: {
		facebook: {
			appId: 2034439646874649,
			fields: 'id,name,first_name,last_name,email,gender,picture,cover,link',
			scope: 'public_profile, email', // publish_stream
			tokenClient: '643f8b0780f14625b35a450c83b715dc',
			version: 'v3.0',
		},
		google: {
			clientId: '635556948154-k7fm0pvn6va39tap1ge4iq23ntd4hu37.apps.googleusercontent.com',
		},
		googleTagManager: {
			id: 'GTM-5L6HMD',
			uaId: 'UA-12054755-5',
			uaIdOperator: 'UA-12054755-6',
		},
		mapbox: {
			accessToken: 'pk.eyJ1IjoiZXVyb3NwaW4iLCJhIjoiY2pxczl3MWZtMDRzaDQ5cWNvNjZ0c3hpeiJ9.QUOwRLovvgYNbTLIolvnuw',
			style: 'mapbox://styles/mapbox/streets-v10',
		},
		paypal: {
			env: 'sandbox', // Set your environment: sandbox | production
			style: {
				label: 'pay', // label: string
				size: 'responsive', // size: small | medium | large | responsive
				shape: 'rect',   // shape: pill | rect
				color: 'blue'   // color: gold | blue | silver | black
			},
			// PayPal Client IDs - replace with your own
			// Create a PayPal app: https://developer.paypal.com/developer/applications/create
			client: {
				sandbox: 'AUSlOhxjtQI5MqlbuyXcFQ3d6pVXQs2maVjB2nHXwMhBxhQa3g4U3wvy98tSiP0iLT3pgJIlyZsV1F--',
				production: '<insert production client id>'
			},
			commit: true, // Show the buyer a 'Pay Now' button in the checkout flow
			sandboxFacilitator: 'lzampetti-facilitator@gmail.com' // facilitator account
		},
		trustPilot: {
			businessunitId: '58e253ab0000ff00059fc0fe',
			businessunitName: 'www.eurospin-viaggi.it',
			minimumReviews: 1,
		},
		swiper: {
			direction: 'horizontal',
			slidesPerView: 'auto',
			spaceBetween: 8,
			grabCursor: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		},
	}
};

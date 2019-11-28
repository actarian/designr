
import { AuthStrategy, LoggerErrorStrategy } from '@designr/core';

export const environment = {
	core: {
		authStrategy: AuthStrategy.Cookie,
		assets: '/assets',
		defaultLanguage: 'it',
		defaultMarket: 'it',
		languages: [
			{ id: 1, name: 'English', lang: 'en' },
			{ id: 2, name: 'Italiano', lang: 'it' }
		],
		loggerErrorStrategy: LoggerErrorStrategy.None,
		public: '/',
		preboot: {
			appRoot: 'app-component'
		},
		production: false,
		routing: {
			initialNavigation: 'enabled',
			enableTracing: false,
			useHash: true,
		},
		transition: {
			appId: 'app'
		},
		urlStrategy: '',
		useLang: false,
		useMarket: false,
		useServiceWorker: false,
	},
	data: {
		memory: {
			apiBase: 'api/',
			passThruUnknownUrl: true,
			dataEncapsulation: false,
			delay: 0,
			remap: {
				'/user/views': '/lastview',
				'/user/destinations': '/destinations',
			}
		},
	},
	editor: {
		enabled: true,
	},
	plugins: {
		facebook: {
			appId: 431784307363175,
			fields: 'id,name,first_name,last_name,email,gender,picture,cover,link',
			scope: 'public_profile, email',
			tokenClient: '5413d2e564a63859151298efaf16cec6',
			version: 'v3.0',
		},
		google: {
			clientId: '196838761783-2faop0kmtoncjqju4n39pnrbkaoqdkq0.apps.googleusercontent.com',
		},
		googleTagManager: {
			id: 'GTM-WXLDKZW',
		},
		mapbox: {
			accessToken: 'pk.eyJ1IjoiYWN0YXJpYW4iLCJhIjoiY2lqNWU3MnBzMDAyZndnbTM1cjMyd2N2MiJ9.CbuEGSvOAfIYggQv854pRQ', // Actarian Basic Style
			style: 'mapbox://styles/actarian/cjosga2ir4hmg2sphrq0wil9n', // Actarian Basic Style
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
			businessunitId: '59ef1f7e0000ff0005ae8138',
			businessunitName: 'eurospin-viaggi.wslabs.it',
			minimumReviews: 1000,
		},
	}
};

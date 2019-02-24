import { Translate } from '@designr/core';

export const translate: Translate[] = [{
	id: 1, name: 'English', lang: 'en', labels: {
		app: {
			notFound: 'Page not found',
			add: 'add',
			back: 'back',
			clear: 'clear',
			save: 'save',
			search: 'search',
		},
		errors: {
			required: 'field required',
			email: 'invalid email',
			exists: 'email already exists',
			minlength: 'Must be at least @value characters long',
			match: 'Fields should match',
		},
		header: {
			profile: 'Profile',
			homepage: 'Homepage',
			destinations: 'Destinations',
			categories: 'Categories',
			informations: 'Infos',
			giftCard: 'Gift card',
			contacts: 'Contacts',
			signIn: 'Sign In',
		},
		home: {
			headline: 'I\'m the localized title',
			lead: 'I\'m the lead of the homepage!.',
		},
		sign: {
			title: 'Sign in your account',
			facebook: 'Sign with Facebook',
			google: 'Sign with Google',
			account: 'Sign with your account',
			create: 'Create account',
		},
		signIn: {
			title: 'Sign in your account',
			email: 'Email',
			password: 'Password',
			passwordReveal: 'Reveal password',
			rememberMe: 'Remember me',
			register: 'Sign In',
			passwordForgotten: 'Forgot your password?',
		},
		signForgotten: {
			title: 'Retrieve your password',
			email: 'Email',
			send: 'Send',
		},
		signUp: {
			title: 'Create your account',
			firstName: 'Name',
			lastName: 'Surname',
			email: 'Email',
			emailConfirm: 'Repeat email',
			password: 'Password',
			privacyLink: 'Privacy link',
			privacy: 'Privacy',
			passwordHint: 'minimum 6 characters',
			passwordReveal: 'Reveal password',
			register: 'Register',
			registered: 'Registration completed',
			registrationSent: 'A confirmation email has been sent to your email address.',
		},
		profile: {
			userName: 'User Name',
		},
	}
}, {
	id: 2, name: 'Italiano', lang: 'it', labels: {
		app: {
			notFound: 'Pagina inesistente',
			add: 'aggiungi',
			back: 'indietro',
			clear: 'cancella',
			save: 'salva',
			search: 'cerca',
		},
		errors: {
			required: 'campo obbligatorio',
			email: 'l\'indirizzo email non è valido',
			exists: 'l\'indirizzo email è già presente, effettuare l\'accesso',
			minlength: 'dev\'essere almeno @value caratteri',
			match: 'I campi devono corrispondere',
		},
		header: {
			profile: 'Profilo',
			homepage: 'Homepage',
			destinations: 'Destinazioni',
			categories: 'Categorie',
			informations: 'Informazioni',
			giftCard: 'Carta regalo',
			contacts: 'Contatti',
			signIn: 'Accedi',
		},
		home: {
			headline: 'Sono un titolo tradotto',
			lead: 'Sono la lead dell\'homepage.',
		},
		sign: {
			title: 'Accedi al tuo account',
			facebook: 'Accedi con Facebook',
			google: 'Accedi con Google',
			account: 'Accedi al tuo account',
			create: 'Crea account',
		},
		signIn: {
			title: 'Accedi al tuo account',
			email: 'Email',
			emailOrCode: 'Email o codice utente',
			password: 'Password',
			passwordReveal: 'Vedi password',
			rememberMe: 'Ricordami',
			register: 'Accedi',
			passwordForgotten: 'Password dimenticata?',
		},
		signForgotten: {
			title: 'Recupera la password',
			email: 'Email',
			send: 'Invia',
			forgottenSent: 'Un\'email con le istruzioni per il recupero della password è stata inviata all\'indirizzo email fornito.',
		},
		signUp: {
			title: 'Crea il tuo account',
			firstName: 'Nome',
			lastName: 'Cognome',
			email: 'Email',
			emailConfirm: 'Conferma email',
			logout: 'Esci',
			password: 'Password',
			privacyLink: 'Privacy link',
			privacy: 'Privacy',
			passwordHint: 'tra 6 e 10 caratteri',
			passwordReveal: 'vedi password',
			register: 'Registrati',
			registered: 'Registrazione completata',
			registrationSent: 'Un\'email di conferma è stata inviata all\'indirizzo email fornito.',
		},
		profile: {
			userName: 'Nome utente',
		},
		footer: {
			disclaimer: 'Le foto mostrate hanno un valore puramente illustrativo. Prezzi, disponibilità ed informazioni possono essere soggette a modifiche.',
			copy: `Copyright © Eurospin New Business S.r.l. a Socio Unico - Via Campalto 3/d - 37036 - San Martino Buon Albergo (VR), Tel. 045 8782222 -- CF e P.IVA 042 924 10232 - REA VR-408544 - Aut. Prov. Verona n. 0024822 del 16/03/2015 - Polizza Ass. Europ Assistance n. 8801920 -- cap. soc. € 500.000,00 i.v. Soggetta a direzione e coordinamento dalla Società Eurospin Italia S.p.A.`
		}
	}
}];

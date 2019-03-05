
export class User {
	id: number | string;
	name?: string;
	password?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	address?: string;
	zipCode?: string;
	countyCode?: string;
	stateCode?: string;
	cityName?: string;
	firstPhoneNumber?: string;
	mobilePhoneNumber?: string;
	birthDate?: Date | string;
	birthCity?: string;
	birthCounty?: string;
	fiscalCode?: string;
	recordCode?: string;
	accessToken?: string;

	constructor(user?: any) {
		if (user) {
			Object.assign(this, user);
		}
	}

}

export class UserAuth extends User {
	accessToken?: string;
	facebookToken?: string;
	googleToken?: string;
	password: string;
	acceptPrivacyPolicies?: boolean;
	acceptNewsletterPolicies?: boolean;
}

export class UserSignIn extends UserAuth {
	passwordReveal?: boolean;
	rememberMe?: boolean;
}

export class UserSignUp extends UserAuth {
	emailConfirm?: string;
	passwordReveal?: boolean = true;
}

export class UserSignForgotten {
	email: string;
}

export class UserRegister {
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
	address?: string;
	zipCode?: string;
	cityName?: string;
	countyCode?: string;
	stateCode?: string;
	gender?: string;
	birthDate?: Date | string;
	birthCity?: string;
	birthCounty?: string;
	nationality?: string;
	fiscalCode?: string;
	vatCode?: string;
	citizenshipCode?: string;
	areaCode?: string;
	name?: string;
	createdDate?: Date | string;
	modifiedDate?: Date | string;
	recordType?: number;
	loginType?: number;
	recordStatus?: number;
	thirdPartRecordCode?: string;
	moniker?: string;
	searchField?: string;
	extraInfo?: string;
	languageCode?: string;
	zoneCode?: string;
	branchOfficeCode?: string;
	categoryCode?: string;
	activityCode?: string;
	promoterCode?: string;
	networkCode?: string;
	firstPhoneNumber?: string;
	secondPhoneNumber?: string;
	faxNumber?: string;
	mobilePhoneNumber?: string;
}

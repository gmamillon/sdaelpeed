export interface ClientAddress {
	country: string,
	city: string,
	zipCode: string,
	streetAddress: string,
}

export interface ClientInfos {
	siret: string,
	phoneNumber: string,
	emailAddress: string,
	currency: 'EUR'|'USD'|'CHF'|'CAD'|'GBP',
	address: ClientAddress,
	comment: string
}

export interface TypeClient {
	clientName: string,
	clientInfos: ClientInfos,
}


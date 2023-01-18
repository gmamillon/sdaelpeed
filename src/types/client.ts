export type ClientAddress = {
	country: string,
	city: string,
	zipCode: string,
	streetAddress: string,
}

export type ClientInfos = {
	siret: string,
	phoneNumber: string,
	emailAddress: string,
	currency: 'EUR'|'USD'|'CHF'|'CAD'|'GBP',
	address: ClientAddress,
	comment: string
}

export type TypeClient = {
	clientName: string,
	clientInfos: ClientInfos,
}


import { ObjectId } from 'mongoose'

export interface ClientInfos {
	siret: string,
	phoneNumber: string,
	emailAddress: string
}

export interface TypeClient {
	clientName: string,
	clientInfos: ClientInfos
}


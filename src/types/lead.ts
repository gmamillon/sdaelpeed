import { ObjectId } from 'mongoose'

export interface TypeLeadProfile {
	creationDate: Date,
	offers: string[],
	pools: string[],
	phoneNumber: string,
	emailAddress: string
}

export interface TypeLeadRaw {
	phoneNumber: string,
	emailAddress: string,
	poolName: string
}

export interface TypeWrappedLeadRaw {
	profile_id: ObjectId,
	creationDate: Date,
	isAccepted: boolean,
	leadValue: number,
	raw: TypeLeadRaw
}

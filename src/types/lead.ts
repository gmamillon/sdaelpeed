import { ObjectId } from 'mongoose'

export type TypeLeadProfile = {
	creationDate: Date,
	offers: string[],
	pools: string[],
	phoneNumber: string,
	emailAddress: string
}

export type TypeLeadRaw = {
	phoneNumber: string,
	emailAddress: string,
	campaignID?: string
}

export type TypeWrappedLeadRaw = {
	profile_id: ObjectId,
	creationDate: Date,
	isAccepted: boolean,
	leadValue: number,
	raw: TypeLeadRaw
}

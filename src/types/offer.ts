import { ObjectId } from 'mongoose'

export interface OfferStatus {
	RUNNING: boolean,
	PUBLISHED: boolean,
	ARCHIVED: boolean
}

export interface OfferParams {
	payout: number,
	startDate: Date|null,
	endDate: Date|null,
	dailyCap: [number, number, number, number, number, number, number]
}

export interface OfferConfig {
	client_id: ObjectId,
	offerName: string,
	countryCode: string,
	status?: OfferStatus,
	params?: OfferParams
}
import { ObjectId } from 'mongoose'

export interface Campaign {
	campaignSourceID: string,
	campaignName: string,
	source: string,
	pool: string,
	contrycode: string,
	mediabuyer_id?: ObjectId,
	offersRestriction: string[]|null
}
import { ObjectId } from 'mongoose'

export interface ValueFormatSettings {
	// Assuming every field value is a string
	valueType: 'date'|'phone'|'string'|'array'|'object',

}

export interface Campaign {
	campaignSourceID: string,
	campaignName: string,
	source: string,
	pool: string,
	contrycode: string,
	mediabuyer_id?: ObjectId,
	offersRestriction: string[]|null,
	mappingSet_id?: ObjectId
}
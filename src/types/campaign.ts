import { ObjectId } from 'mongoose'

export interface ValueFormatSettings {
	// Assuming every field value is a string
	valueType: 'date'|'phone'|'string'|'array'|'object',

}

// This Define for a field of a raw lead from a campaign the corresponding standard field name
// and give the name value format settings.
export interface FieldMappingParams {
	standardFieldName: string,
	rawFieldName: string,
	valueFormat: string
}

export interface Campaign {
	campaignSourceID: string,
	campaignName: string,
	source: string,
	pool: string,
	contrycode: string,
	mediabuyer_id?: ObjectId,
	offersRestriction: string[]|null,
	mappingSet: FieldMappingParams[]
}
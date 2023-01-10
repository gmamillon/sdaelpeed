import { TypeLeadRaw } from '../../types/lead'
import { FieldMappingParams, MappingSet as TypeMappingSet } from '../../types/mapping-set'
import { MappingSet } from '../../models/mappings/mapping-set'

function findCampaignID(raw: TypeLeadRaw): string|null {
	return raw.campaignID || raw[Object.keys(raw).find(key => key.includes('campaignID'))] || null
}

async function findMappingSet(set_id: string): Promise<FieldMappingParams[]> {
	const mapping: TypeMappingSet = await MappingSet.findOne({ _id: set_id })
	return mapping.mappingSet
}

async function leadMapper(set_id: string, lead: Object): Promise<Object> {
	const mappingSet = await findMappingSet(set_id)
	return mappingSet.reduce((mapped, settings) => {
		//mapped[settings.newFieldName] = settings.valueFormat(lead[settings.fieldName])
		return mapped
	}, {})
}
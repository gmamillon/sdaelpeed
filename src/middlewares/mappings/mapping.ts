import { TypeLeadRaw } from '../../types/lead'
import { FieldMappingParams } from '../../types/mapping-set'

function findCampaignID(raw: TypeLeadRaw): string|null {
	return raw.campaignID || raw[Object.keys(raw).find(key => key.includes('campaignID'))] || null
}

function findMappingSet(campaignID: string): FieldMappingParams[] {
	return []
}
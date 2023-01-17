import fs, { readFileSync } from 'fs'
import {
	Campaign,
	ValueFormatSettings,
 	TypeClient,
	ClientInfos,
	ClientAddress,
	TypeWrappedLeadRaw,
	TypeLeadRaw,
	TypeLeadProfile,
	FieldMappingParams,
	MappingSet,
	OfferStatus,
	DailyRules,
	OfferParamsDetails,
	OfferParams,
	RecipientAPIConfig,
	SheetConfig,
	DataSendingConfig,
	OfferConfig,
	Pool
} from '../src/types'

const clientsOffer = readFileSync('./data/clients.json', { encoding: 'utf8', flag: 'r' })

export function CreateClientsAndOffers() {

}
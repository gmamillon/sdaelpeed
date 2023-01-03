import { Schema, model, Document } from 'mongoose'
import { OfferConfig } from '../../types/offer'

interface CampaignModel extends Document, OfferConfig {}

const offerSchema = new Schema({
	campaignSourceID: { type: String, required: true, unique: true },
	campaignName: { type: String, requiered: true },
	source: { type: String, requiered: true },
	pool: { type: String, requiered: true },
	countryCode: { type: String, requiered: true },
	offersRestriction: {
		type: Object,
		requiered: true,
		default: null
	},
	mediabuyer_id: { type: Schema.Types.ObjectId, requiered: false },
	creationDate: { type: Date, default: Date.now() }
})

export const Offer = model<CampaignModel>('Offers', offerSchema)
import { Schema, model, Document } from 'mongoose'
import { OfferConfig } from '../../types/offer'

interface OfferModel extends Document, OfferConfig {}

const offerSchema = new Schema({
	client_id: { type: Schema.Types.ObjectId, requiered: true },
	clientName: { type: String, requiered: true},
	offerName: { type: String, requiered: true },
	countryCode: { type: String, requiered: true },
	payout: { type: Number, requiered: true },
	isActive: { type: Boolean, requiered: true },
	startActivation: { type: Date },
	endActivation: { type: Date }
})

export const Offer = model<OfferModel>('Offers', offerSchema)
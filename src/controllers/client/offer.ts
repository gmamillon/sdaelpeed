import { OfferConfig, OfferParams, OfferStatus } from '../../types/offer'
import { ObjectId } from 'mongoose'
import { Offer } from '../../models/client/offer.js'

export class UseOffer implements OfferConfig {

	public _id: ObjectId
	public client_id: ObjectId
	public offerName: string
	public countryCode: string
	public status: OfferStatus
	public params: OfferParams

	constructor (client_id: ObjectId, offer: OfferConfig) {

		const { status, params } = offer

		this.client_id = client_id
		this.offerName = offer.offerName
		this.countryCode = offer.countryCode
		this.status = {
			RUNNING: status?.RUNNING || false,
			PUBLISHED: status?.PUBLISHED || false,
			ARCHIVED: status?.ARCHIVED || false
		}
		this.params = {
			payout: params?.payout || 0,
			startDate: params?.startDate ? new Date(params.startDate) : null,
			endDate: params?.endDate ? new Date(params.endDate) : null,
			dailyCap: params?.dailyCap || [0,0,0,0,0,0,0]
		}
	}
	
	async createOffer(): Promise<OfferConfig> {
		const offerExists = await this.readOffer()

		if (offerExists) {
			return offerExists
		}

		const offer = new Offer(this)
		await offer.save()

		return this.readOffer()
	}
	
	async readOffer(): Promise<OfferConfig | null> {
		const { offerName, client_id } = this
		const foundOffer = await Offer.findOne({ offerName, client_id })

		if (foundOffer) {
			const { _id } = foundOffer
			this._id = _id
		}

		return foundOffer
	}

}
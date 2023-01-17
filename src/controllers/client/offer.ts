import { DataSendingConfig, OfferConfig, OfferParams, OfferStatus } from '../../types/offer'
import { ObjectId } from 'mongoose'
import { Offer } from '../../models/client/offer.js'

export class UseOffer implements OfferConfig {

	public _id: ObjectId
	public client_id: ObjectId
	public offerName: string
	public poolName: string
	public countryCode: string
	public status: OfferStatus
	public params: OfferParams
	public dataSendingConfig: DataSendingConfig
	public duplicateBlockDays: number
	public devalidationRate: number

	constructor (client_id: ObjectId, offer: OfferConfig) {

		const { status, params } = offer

		this.client_id = client_id
		this.offerName = offer.offerName
		this.countryCode = offer.countryCode
		this.status = {
			RUNNING: false,
			PUBLISHED: false,
			ARCHIVED: false
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
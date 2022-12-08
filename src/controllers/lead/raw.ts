import { ObjectId } from 'mongoose'
import { TypeLeadRaw, TypeWrappedLeadRaw } from '../../types/lead'
import { Raw } from '../../models/lead/raw.js'

export class LeadRaw implements TypeWrappedLeadRaw {

	public _id: ObjectId
	public profile_id: ObjectId
	public creationDate: Date
	public isAccepted: boolean
	public readonly raw: TypeLeadRaw

	constructor(profile_id: ObjectId, raw: TypeLeadRaw) {

		this.profile_id = profile_id
		this.creationDate = new Date()
		this.raw = raw

	}

	async createLeadRaw(): Promise<TypeWrappedLeadRaw> {

		const rawExists = await this.readLeadRaw()
		if (rawExists) {
			return rawExists
		}

		const raw = new Raw(this)
		await raw.save()

		return this.readLeadRaw()
	}

	async readLeadRaw(): Promise<TypeWrappedLeadRaw | null> {
		const { profile_id, raw } = this
		const foundRaw = await Raw.findOne({
			profile_id,
			'raw.poolName': raw.poolName,
			creationDate: { $gte: new Date(Date.now() - 7 * 24 * 3600 * 1000) }
		})

		if (foundRaw) {
			const { _id, profile_id, creationDate } = foundRaw
			this._id = _id
			this.profile_id = profile_id
			this.creationDate = creationDate
		}

		return foundRaw
	}

}
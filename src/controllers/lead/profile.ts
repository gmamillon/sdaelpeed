import { ObjectId } from 'mongoose'
import { TypeLeadProfile } from '../../types/lead'
import { Profile } from '../../models/lead/profile.js'

export class LeadProfileFormat implements TypeLeadProfile {
	
	public _id: ObjectId
	public creationDate: Date
	public emailAddress: string
	public phoneNumber: string
	public offers: string[]
	public pools: string[]

	constructor(phoneNumber: string, emailAddress: string) {
		this.phoneNumber = phoneNumber
		this.emailAddress = emailAddress
		this.creationDate = new Date()
		this.offers = []
	}
	
}

export class LeadProfile extends LeadProfileFormat {
	
	constructor (phoneNumber: string, emailAddress: string) {
		super(phoneNumber, emailAddress)
	}
	
	async createLeadProfile(): Promise<TypeLeadProfile> {
		const profileExists = await this.readLeadProfile()

		if (profileExists) {
			return profileExists
		}

		const profile = new Profile(this)
		await profile.save()
		
		return this.readLeadProfile()
	}
	
	async readLeadProfile(): Promise<TypeLeadProfile | null> {
		const { phoneNumber, emailAddress } = this
		const foundProfile = await Profile.findOne({ phoneNumber, emailAddress })

		if (foundProfile) {
			const { creationDate, offers, _id } = foundProfile
			this._id = _id
			this.creationDate = new Date(creationDate)
			this.offers = offers
		}

		return foundProfile
	}
}
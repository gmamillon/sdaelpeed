import { Schema, model, Document } from 'mongoose'
import { TypeLeadProfile } from '../../types/lead'

interface ProfileModel extends Document, TypeLeadProfile {}

const profileSchema: Schema = new Schema({
	creationDate: { type: Date, required: true },
	emailAddress: { type: String, required: true },
	phoneNumber: { type: String, requiered: true },
	offers: { type: [String], requiered: true}
})

export const Profile = model<ProfileModel>('Profiles', profileSchema)
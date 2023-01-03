import { Schema, model, Document } from 'mongoose'
import { TypeWrappedLeadRaw } from '../../types/lead'

interface RawModel extends Document, TypeWrappedLeadRaw {}

const rawSchema = new Schema({
	profile_id: { type: Schema.Types.ObjectId, requiered: true },
	creationDate: { type: Date, default: Date.now() },
	isAccepted: { type: Boolean, required: true },
	raw: { type: Object, requiered: true }
})

export const Raw = model<RawModel>('Raws', rawSchema)
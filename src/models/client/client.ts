import { Schema, model, Document } from 'mongoose'
import { TypeClient } from '../../types/client'

interface ClientModel extends Document, TypeClient {}

const clientSchema = new Schema({
	clientName: { type: String, requiered: true},
	clientInfos: { type: Object, requiered: true }
})

export const Client = model<ClientModel>('Clients', clientSchema)
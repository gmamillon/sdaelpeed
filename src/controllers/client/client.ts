import { ClientInfos, TypeClient } from '../../types/client'
import { ObjectId } from 'mongoose'
import { Client } from '../../models/client/client.js'

export class UseClient implements TypeClient {

	public _id: ObjectId
	public clientName: string
	public clientInfos: ClientInfos

	constructor (clientName: string, clientInfos: ClientInfos) {
		this.clientName = clientName
		this.clientInfos = clientInfos
	}
	
	async createClient(): Promise<TypeClient> {
		const clientExists = await this.readClient()

		if (clientExists) {
			return clientExists
		}

		const client = new Client(this)
		await client.save()

		return this.readClient()
	}
	
	async readClient(): Promise<TypeClient | null> {
		const { clientName, clientInfos } = this
		const foundClient = await Client.findOne({ clientName, clientInfos })

		if (foundClient) {
			const { _id } = foundClient
			this._id = _id
		}

		return foundClient
	}

}
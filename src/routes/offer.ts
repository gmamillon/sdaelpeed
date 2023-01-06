import type { FastifyInstance } from 'fastify'
import { LeadProfile } from '../controllers/lead/profile.js'
import { LeadRaw } from '../controllers/lead/raw.js'
import { TypeLeadRaw } from '../types/lead.js'

const Lead = async (fastify: FastifyInstance, _options: any) => {
	fastify.post<{ Body: TypeLeadRaw }>('/lead', async (request, _reply: any) => {
		
		const { phoneNumber, emailAddress } = request.body
		
		const profile = new LeadProfile(phoneNumber, emailAddress)
		await profile.createLeadProfile()
		
		const raw = new LeadRaw(profile._id, request.body)
		return raw.createLeadRaw()
	
	})
}

export default Lead
export { Lead }
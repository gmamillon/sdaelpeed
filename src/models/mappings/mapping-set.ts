import { Schema, model, Document } from 'mongoose'
import { MappingSet as TypeMappingSet } from '../../types/mapping-set'

interface MappingModel extends Document, TypeMappingSet {}

const mappingSetSchema = new Schema({
	mappingSetName: { type: String, requiered: true},
	mappingSet: { type: Object, requiered: true, default: [] }
})

export const MappingSet = model<MappingModel>('Clients', mappingSetSchema)
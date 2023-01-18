// This Define for a field of a raw lead from a campaign the corresponding standard field name
// and give the name value format settings.
export type FieldMappingParams = {
	newFieldName: string,
	fieldName: string,
	valueFormat: string
}

export type MappingSet = {
	mappingSetName: string,
	mappingSet: FieldMappingParams[]
}
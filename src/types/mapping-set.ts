// This Define for a field of a raw lead from a campaign the corresponding standard field name
// and give the name value format settings.
type FieldMappingParams = {
	newFieldName: string,
	fieldName: string,
	valueFormat: string
}

type MappingSet = {
	mappingSetName: string,
	mappingSet: FieldMappingParams[]
}

export { FieldMappingParams, MappingSet }
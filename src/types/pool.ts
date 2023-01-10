// Define all expected fields for a lead in a pool
export type ExpectedFields = {
	fieldName: string,
	// List expected value for this field, can be null in the case where all values are valid.
	expectedValues: string[]|null
}

export interface Pool {
	poolName: string,
	expectedFields: ExpectedFields[]
}
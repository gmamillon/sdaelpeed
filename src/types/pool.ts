
export interface Pool {
	poolName: string,

	// Define all expected fields for a lead in a pool,
	// expected fields are the object keys and their values are arrays of their expected values
	poolExpectedFields: Object
}
import { ObjectId } from 'mongoose'

// Define the offer's status
export interface OfferStatus {
	RUNNING: boolean,
	PUBLISHED: boolean,
	ARCHIVED: boolean
}

// Define for one day the payout, cap and working hour range (the day period when the offer is "opened")
export interface DailyRules {
	payout: number,

	// The cap can be limited or not
	cap: number|'nolimit',

	workinghourRange: [number, number]
}

// Define the running period of a offer set of parameters values, and their definition by week days
export interface OfferParamsDetails {
	startDate?: Date,
	endDate?: Date,
	geoType: 'zipcode'|'frregion'|'esregion'|'ptregion'|string
	geo: string[]
	weekdaysRules: [DailyRules, DailyRules, DailyRules, DailyRules, DailyRules, DailyRules, DailyRules]
}

// Define the offer parameters, allow us to have dynamic payout, activation periods and lead cap
export interface OfferParams {
	currentParams: OfferParamsDetails,
	defaultParams: OfferParamsDetails,
	paramsCalendar?: OfferParamsDetails[]
}


// Define the client API configuration when the client receives his leads this way
export interface RecipientAPIConfig {
	// Client's API lead endpoint URL
	url?: string,

	// API request sending method
	method: 'post'|'get',

	// API request content-type
	contentType: 'urlencoded'|'json'|'plain',

	// Fields to send in the request body with their type, [<field name>, <field type / default value>]
	body: [string, string][]

	// Fields to send in the request params, [<field name>, <field type / default value>]
	params: [string, string][]
}

// Define needed informations to send a lead to a google sheet
export interface SheetConfig {
	sheetID: string,
	range: string,
	refreshToken: string
}

// Define the way we send leads for a client's offer
export interface DataSendingConfig {
	// lead sending way
	recipientType: 'sheet'|'api'|null,

	APIConfig?: RecipientAPIConfig,
	sheetConfig?: SheetConfig,

}


// Define the whole offer, link it to a client, set a name, the status .. 
export interface OfferConfig {
	client_id: ObjectId,
	offerName: string,
	countryCode: string,
	poolName: string,
	devalidationRate: number,
	duplicateBlockDays: number,
	status?: OfferStatus,
	params?: OfferParams,
	dataSendingConfig: DataSendingConfig
}
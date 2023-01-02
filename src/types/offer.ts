import { ObjectId } from 'mongoose'

// Define the offer's status
export interface OfferStatus {
	RUNNING: boolean,
	PUBLISHED: boolean,
	ARCHIVED: boolean
}

export interface DailyRules {
	cap: number,
	workinghourRange: [number, number]
}

export interface OfferParamsDetails {
	payout: number,
	startDate?: Date,
	endDate?: Date,
	weekdaysRules: [number, number, number, number, number, number, number]
}

// Define the offer parameters, allow us to have dynamic payout, activation periods and lead cap
export interface OfferParams {
	currentParams: OfferParamsDetails,
	defaultParams: OfferParamsDetails,
	paramsCalendar: OfferParamsDetails[]
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
	recipientType: 'sheet'|'api',

	APIConfig?: RecipientAPIConfig,
	sheetConfig?: SheetConfig,

}


// Define the whole offer, link it to a client, set a name, the status .. 
export interface OfferConfig {
	client_id: ObjectId,
	offerName: string,
	countryCode: string,
	status?: OfferStatus,
	params?: OfferParams,
	dataSendingConfig: DataSendingConfig
}
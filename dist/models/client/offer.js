import { Schema, model } from 'mongoose';
const offerSchema = new Schema({
    client_id: { type: Schema.Types.ObjectId, requiered: true },
    clientName: { type: String, requiered: true },
    offerName: { type: String, requiered: true },
    countryCode: { type: String, requiered: true },
    status: {
        type: Object,
        requiered: true,
        default: {
            RUNNING: false,
            PUBLISHED: false,
            ARCHIVED: false
        }
    },
    params: {
        type: Object,
        requiered: true,
        default: {
            currentParams: {},
            defaultParams: {},
            paramsCalendar: []
        }
    },
    dataSendingConfig: {
        type: Object,
        requiered: true,
        default: {
            recipientType: null
        }
    },
    devalidationRate: { type: Number, default: 0 },
    creationDate: { type: Date, default: Date.now() }
});
export const Offer = model('Offers', offerSchema);
//# sourceMappingURL=offer.js.map
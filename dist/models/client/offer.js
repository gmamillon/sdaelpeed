import { Schema, model } from 'mongoose';
const offerSchema = new Schema({
    client_id: { type: Schema.Types.ObjectId, requiered: true },
    clientName: { type: String, requiered: true },
    offerName: { type: String, requiered: true },
    countryCode: { type: String, requiered: true },
    payout: { type: Number, requiered: true },
    isActive: { type: Boolean, requiered: true },
    startActivation: { type: Date },
    endActivation: { type: Date }
});
export const Offer = model('Offers', offerSchema);
//# sourceMappingURL=offer.js.map
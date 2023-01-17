import { Schema, model } from 'mongoose';
const rawSchema = new Schema({
    profile_id: { type: Schema.Types.ObjectId, requiered: true },
    creationDate: { type: Date, default: Date.now() },
    isAccepted: { type: Boolean, required: true },
    raw: { type: Object, requiered: true }
});
export const Raw = model('Raws', rawSchema);
//# sourceMappingURL=raw.js.map
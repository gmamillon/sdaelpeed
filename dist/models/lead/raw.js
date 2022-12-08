import { Schema, model } from 'mongoose';
const rawSchema = new Schema({
    profile_id: { type: String, requiered: true },
    creationDate: { type: Date, requiered: true },
    raw: { type: Object, requiered: true }
});
export const Raw = model('Raws', rawSchema);
//# sourceMappingURL=raw.js.map
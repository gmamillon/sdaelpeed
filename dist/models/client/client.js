import { Schema, model } from 'mongoose';
const clientSchema = new Schema({
    clientName: { type: String, requiered: true },
    clientInfos: { type: Object, requiered: true }
});
export const Client = model('Clients', clientSchema);
//# sourceMappingURL=client.js.map
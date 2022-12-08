import { Schema, model } from 'mongoose';
const profileSchema = new Schema({
    creationDate: { type: Date, required: true },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String, requiered: true },
    offers: { type: [String], requiered: true }
});
export const Profile = model('Profiles', profileSchema);
//# sourceMappingURL=profile.js.map
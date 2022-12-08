var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Profile } from '../../models/lead/profile.js';
export class LeadProfileFormat {
    constructor(phoneNumber, emailAddress) {
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.creationDate = new Date();
        this.offers = [];
    }
}
export class LeadProfile extends LeadProfileFormat {
    constructor(phoneNumber, emailAddress) {
        super(phoneNumber, emailAddress);
    }
    createLeadProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            const profileExists = yield this.readLeadProfile();
            if (profileExists) {
                return profileExists;
            }
            const profile = new Profile(this);
            yield profile.save();
            return this.readLeadProfile();
        });
    }
    readLeadProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            const { phoneNumber, emailAddress } = this;
            const foundProfile = yield Profile.findOne({ phoneNumber, emailAddress });
            if (foundProfile) {
                const { creationDate, offers, _id } = foundProfile;
                this._id = _id;
                this.creationDate = new Date(creationDate);
                this.offers = offers;
            }
            return foundProfile;
        });
    }
}
//# sourceMappingURL=profile.js.map
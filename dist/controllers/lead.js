var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class LeadProfileFormat {
    constructor(phoneNumber, emailAddress) {
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.creationDate = new Date();
        this.turnover = 0;
        this.offers = [];
    }
}
export class LeadProfile extends LeadProfileFormat {
    constructor(phoneNumber, emailAddress) {
        super(phoneNumber, emailAddress);
    }
    ReadLeadProfile(fastify) {
        return __awaiter(this, void 0, void 0, function* () {
            const Profiles = fastify.mongo.db.collection('Profiles');
            const { phoneNumber, emailAddress } = this;
            const foundProfile = yield Profiles.findOne({ phoneNumber, emailAddress });
            if (foundProfile) {
                const { creationDate, turnover, offers } = foundProfile;
                this.creationDate = new Date(creationDate);
                this.turnover = turnover;
                this.offers = offers;
            }
            return foundProfile;
        });
    }
    CreateLeadProfile(fastify) {
        return __awaiter(this, void 0, void 0, function* () {
            const Profiles = fastify.mongo.db.collection('Profiles');
            const { insertedId } = yield Profiles.insertOne(this);
            return insertedId;
        });
    }
}
//# sourceMappingURL=lead.js.map
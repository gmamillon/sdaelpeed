var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Raw } from '../../models/lead/raw.js';
export class LeadRaw {
    constructor(profile_id, raw) {
        this.profile_id = profile_id;
        this.creationDate = new Date();
        this.raw = raw;
    }
    createLeadRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const rawExists = yield this.readLeadRaw();
            if (rawExists) {
                return rawExists;
            }
            const raw = new Raw(this);
            yield raw.save();
            return this.readLeadRaw();
        });
    }
    readLeadRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const { profile_id, raw } = this;
            const foundRaw = yield Raw.findOne({
                profile_id,
                'raw.poolName': raw.poolName,
                creationDate: { $gte: new Date(Date.now() - 7 * 24 * 3600 * 1000) }
            });
            if (foundRaw) {
                const { _id, profile_id, creationDate } = foundRaw;
                this._id = _id;
                this.profile_id = profile_id;
                this.creationDate = creationDate;
            }
            return foundRaw;
        });
    }
}
//# sourceMappingURL=raw.js.map
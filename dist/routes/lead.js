var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LeadProfile } from '../controllers/lead/profile.js';
import { LeadRaw } from '../controllers/lead/raw.js';
const Lead = (fastify, _options) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.post('/lead', (request, _reply) => __awaiter(void 0, void 0, void 0, function* () {
        const { phoneNumber, emailAddress } = request.body;
        const profile = new LeadProfile(phoneNumber, emailAddress);
        yield profile.createLeadProfile();
        const raw = new LeadRaw(profile._id, request.body);
        return raw.createLeadRaw();
    }));
});
export default Lead;
export { Lead };
//# sourceMappingURL=lead.js.map
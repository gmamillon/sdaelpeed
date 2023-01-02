var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client } from '../../models/client/client.js';
export class UseClient {
    constructor(clientName, clientInfos) {
        this.clientName = clientName;
        this.clientInfos = clientInfos;
    }
    createClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const clientExists = yield this.readClient();
            if (clientExists) {
                return clientExists;
            }
            const client = new Client(this);
            yield client.save();
            return this.readClient();
        });
    }
    readClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const { clientName, clientInfos } = this;
            const foundClient = yield Client.findOne({ clientName, clientInfos });
            if (foundClient) {
                const { _id } = foundClient;
                this._id = _id;
            }
            return foundClient;
        });
    }
}
//# sourceMappingURL=client.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Fastify from 'fastify';
import mongoose from 'mongoose';
import Lead from './routes/lead.js';
const fastify = Fastify({ logger: true });
fastify.register(Lead);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fastify.listen({ port: 3000 });
        yield mongoose.connect('mongodb://localhost:27017/Lead');
        const address = fastify.server.address();
        console.log(address);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
start();
//# sourceMappingURL=app.js.map
import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import {Sniper} from './Sniper/Kernel';

dotenv.config();

http.createServer(function (req: IncomingMessage, res: ServerResponse) {
    new Sniper.Kernel(req, res, process.env);
}).listen(process.env.PORT);
import * as http from 'http';
import log from 'loglevel';
import 'dotenv/config';
import { requestHandler } from './router';

const server = http.createServer((req:http.IncomingMessage, res:http.OutgoingMessage) => {
    requestHandler(req, res);
});
log.setLevel(log.levels.DEBUG, true);
server.listen(process.env.PORT);
log.info("Server has started on port " + process.env.PORT);
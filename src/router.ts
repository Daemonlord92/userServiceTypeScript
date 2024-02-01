import { IncomingMessage, OutgoingMessage } from "http";
import { getAllUsers, postNewUser } from "./controller/user-controller";

export function requestHandler(req:IncomingMessage, res:OutgoingMessage) {
    const url = new URL(req.url??'/', `http://${req.headers.host}`);
    const path = url.pathname;
    if(path === '/user' && req.method === 'GET') {
        getAllUsers(req,res);
    }
    else if(path === '/user' && req.method === 'POST') {
        postNewUser(req, res);
    }
    else {
        res.appendHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Route not found' }));
      }
}
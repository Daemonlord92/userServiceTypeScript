import { IncomingMessage, OutgoingMessage } from "http";
import { createUser, getUsers } from "../service/user-service";


export const getAllUsers = async (req:IncomingMessage, res:OutgoingMessage) => {
    res.appendHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(await getUsers()));
}

export const postNewUser = async (req:IncomingMessage, res:OutgoingMessage) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', async () => {
        const {username, password} = JSON.parse(body);
        const result = await createUser(username,password);
        res.appendHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));
    })
}
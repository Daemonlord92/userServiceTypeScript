import { MongoClient } from "mongodb";
import log from 'loglevel'
import 'dotenv/config';

export const DatabaseConnection = async () => {
    const client = new MongoClient(process.env.URL??'/', {
        maxPoolSize:50,
        maxConnecting:500,
        maxIdleTimeMS: 500
    })
    try {
        await client.connect();
        log.info("Connection to MongoDB establish");
        return client.db(process.env.DATABASE)
    } catch (err) {
        log.error("Error Occurec in the Database Connection " + err);
        throw err;
    }
}


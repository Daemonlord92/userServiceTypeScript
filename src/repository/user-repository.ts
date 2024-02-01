import { DatabaseConnection } from "../config/database-connection";
import log from 'loglevel';
import { User } from "../entity/types";

export const saveUser = async (user:User) => {
    try {
        const db = await DatabaseConnection();
        const collection = db.collection('users');
        const result = await collection.insertOne(user);
        log.info("User Successfully insereted: ", result.insertedId);
        return result.acknowledged;
    } catch (error) {
        log.error("UserServer:SaveUser:L13: ", error);
        throw error;
    }
}

export const getAllUsers = async () => {
    try {
        const db = await DatabaseConnection();
        const collection = db.collection('users');
        const users = collection.find().toArray();
        log.info("Users Found ", users);
        return users;
    } catch (error) {
        log.error("UserServer:getAllUsers:L26: ", error);
        throw error;
    }
}
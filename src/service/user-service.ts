import { User } from "../entity/types";
import { saveUser, getAllUsers } from "../repository/user-repository";

export const createUser = async (username:string, password:string) => {
    const user = {
        username:username,
        password:password
    };

    const result = await saveUser(user);
    return result;
}

export const getUsers = async () => {
    return await getAllUsers();
}
import { DocumentDefinition, FilterQuery } from 'mongoose';
import User, { UserDocument } from '../models/user.model';

export async function createUser(input: DocumentDefinition<UserDocument>) {
    try {
        return await User.create(input);
    } catch (error) {
        throw new Error(error);
    }
}

export async function findUser(query: FilterQuery<UserDocument>) {
    return User.findOne(query).lean();
}

import mongoose from 'mongoose';
export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        active: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;

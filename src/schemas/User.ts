import { Schema, ObjectId } from 'mongoose';

export interface IUser {
  _id?: ObjectId;
  name: string;
  email: string;
}

export const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
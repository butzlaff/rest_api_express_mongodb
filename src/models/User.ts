import mongoose, { Schema } from 'mongoose';

interface IUser {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default class User {
  // 3. Create a Model.
  async createUser(user: IUser) {
    const connection = mongoose.createConnection('mongodb://admin:admin@127.0.0.1:27017');
    const newUser = connection.model<IUser>('users', userSchema);
    return await newUser.create({ ...user });
  }
}
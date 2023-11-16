import { model } from 'mongoose';
import { IUser, UserSchema } from '../schemas/User';

export default class UserModel {
  constructor(
    private Users = model<IUser>('users', UserSchema)) { 
  }
  async createUser(user: IUser) {
    return await this.Users.create({ ...user });
  }

  async deleteUser(email: string) {
    return await this.Users.deleteOne({ email });
  }
}
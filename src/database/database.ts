import mongoose, { Connection, Error } from 'mongoose';


export async function database() {
  try {
    return await mongoose.connect('mongodb://localhost:27017/test');
  } catch (error) {
    console.log(error);
  }
}
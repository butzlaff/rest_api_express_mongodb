import { Response, Request } from "express";
import UserModel from "../models/User"


export class UserController {
  constructor(private readonly userModel = new UserModel()) {}

  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    const userCreated = await this.userModel.createUser({ name, email });
    return res.status(201).json({ userCreated });
  }
}
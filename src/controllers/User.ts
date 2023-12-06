import { Response, Request, NextFunction } from "express";
import UserModel from "../models/User"
import { BadRequestError } from "../utils/badRequest";


export class UserController {
  constructor(private readonly userModel = new UserModel()) {}

  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new BadRequestError('Missing params');
    }
    const userCreated = await this.userModel.createUser({ name, email });
    if (userCreated instanceof Error) throw new Error()
    return res.status(201).json({ userCreated });
  }
}
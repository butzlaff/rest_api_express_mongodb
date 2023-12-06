import { NextFunction, Request, Response } from 'express'
import express from 'express';
import { ApiError } from '../utils/apiError'

export const errorMiddleware = (
	error: Error & Partial<ApiError>,
	_req: Request,
	res: Response,
	_next: NextFunction
): express.Response => {
	const statusCode = error.statusCode ?? 500
	const message = error.statusCode ? error.message : 'Internal Server Error'
	return res.status(statusCode).json({ message })
}
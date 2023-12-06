import { ApiError } from "./apiError";

export class UnauthorizedError extends ApiError {
	constructor(message: string) {
		super(message, 401)
	}
}
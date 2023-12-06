import { ApiError } from "./apiError";

export class NotFoundError extends ApiError {
	constructor(message: string) {
		super(message, 404)
	}
}
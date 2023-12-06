import { ApiError } from "./apiError"

export class MissingData extends ApiError {
	constructor(message: string) {
		super(message, 400)
	}
}
import { ApplicationError } from './ApplicationError';

export class ApiError extends ApplicationError {
	constructor(message = 'Ошибка сети, попробуйте позже') {
		super(message);
	}
}

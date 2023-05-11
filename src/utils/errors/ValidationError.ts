import { ApplicationError } from './ApplicationError';

export class ValidationError extends ApplicationError {
	constructor(message = 'Ошибка валидации данных') {
		super(message);
	}
}

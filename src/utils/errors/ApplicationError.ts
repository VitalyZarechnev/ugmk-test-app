export class ApplicationError extends Error {
	constructor(message = 'Ошибка приложения, попробуйте обновить страницу') {
		super(message);
	}
}

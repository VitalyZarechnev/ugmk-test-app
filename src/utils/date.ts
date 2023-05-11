import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const DATE_FORMAT = 'D/M/YYYY';

export const getMonth = (date: string | null, format = DATE_FORMAT) => {
	if (!date) {
		return 0;
	}
	
	return dayjs(date, format).get('month')
}

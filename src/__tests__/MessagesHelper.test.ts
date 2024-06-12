import {IMessage} from 'types';
import {isCityRepeated} from 'utils/messagesHelper';

describe('Text formatter', () => {
	test('It returns true when city is repeated', () => {
		const history: IMessage[] = [
			{type: 'user', content: 'Рязань'},
			{type: 'bot', content: 'Москва'},
			{type: 'user', content: 'Санкт-Петербург'},
		];
		const city = 'Москва';

		expect(isCityRepeated(city, history)).toBe(true);
	});

	test('It returns false when city is not repeated', () => {
		const history: IMessage[] = [
			{type: 'user', content: 'Рязань'},
			{type: 'bot', content: 'Москва'},
			{type: 'user', content: 'Санкт-Петербург'},
		];
		const city = 'Минск';

		expect(isCityRepeated(city, history)).toBe(false);
	});
});

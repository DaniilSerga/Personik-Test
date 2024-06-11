import {getBotResponse} from 'services/botResponse';
import {CITIES} from 'constants/index';

describe('bot responses', () => {
	test('it gives back the city matching the last letter of input city', async () => {
		const history = CITIES.slice(0, 10);
		const city = 'Анапа';
		const lastLetter = city.at(-1)!.toUpperCase();

		const {name} = await getBotResponse(city, history);

		expect(name.startsWith(lastLetter)).toBe(true);
	}, 12100);

	test('It returns city which is not mentioned in history', async () => {
		const history = CITIES.slice(0, 10);
		const city = 'Анапа';

		const {name} = await getBotResponse(city, history);

		expect(history.some((historyCity) => historyCity.name !== name)).toBe(true);
	}, 12100);
});

export {};

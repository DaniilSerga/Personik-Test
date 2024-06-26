import CITIES from 'constants/citiesList';
import {getBotResponseRequest} from 'services/botService';
import {IMessage} from 'types/Message';

describe('bot responses', () => {
	test('it gives back the city matching the last letter of input city', async () => {
		const history: IMessage[] = CITIES.slice(0, 10).map<IMessage>((storedCity) => {
			return {type: 'bot', content: storedCity.name};
		});
		const city = 'Самара';
		const lastLetter = city.at(-1)!.toUpperCase();

		const {content} = await getBotResponseRequest(city, history);

		expect(content!.startsWith(lastLetter)).toBe(true);
	}, 13100);

	test('It returns city which is not mentioned in history', async () => {
		const history: IMessage[] = CITIES.slice(0, 10).map<IMessage>((storedCity) => {
			return {type: 'bot', content: storedCity.name};
		});
		const city = 'Самара';

		const {content} = await getBotResponseRequest(city, history);

		expect(history.some((historyCity) => historyCity.content !== content)).toBe(true);
	}, 13100);

	test('It returns city with empty history', async () => {
		const history: IMessage[] = [];
		const city = 'Анапа';
		const lastLetter = city.at(-1)!.toUpperCase();

		const {content} = await getBotResponseRequest(city, history);

		expect(content!.startsWith(lastLetter)).toBe(true);
	}, 13100);
});

export {};

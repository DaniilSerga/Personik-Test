import {CITIES} from 'constants/index';
import {IMessage} from 'types';

const getRandomDelay = () => {
	const min = 10;
	const max = 121;
	return Math.floor(Math.random() * (max - min + 1) + min) * 100;
};

const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getBotResponse = async (city: string, history: IMessage[]): Promise<IMessage> => {
	const lastLetter = city.at(-1)! === 'ь' || city.at(-1)! === 'ъ' ? city.at(-2) : city.at(-1)!;

	const delay = getRandomDelay();
	await sleep(delay);

	let result = CITIES.filter((storeCity) => storeCity.name[0].toLowerCase() === lastLetter);

	if (history.length > 0) {
		result = result.filter(
			(storeCity) => !history.some((historyCity) => storeCity.name === historyCity.content),
		);
	}

	console.log(result);

	return {type: 'bot', content: result[0].name};
};

import {CITIES} from 'constants/index';
import {IMessage} from 'types';
import {getLastLetter} from 'utils/textFormatter';

const getRandomDelay = () => {
	const min = 10;
	const max = 121;
	return Math.floor(Math.random() * (max - min + 1) + min) * 100;
};

const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getBotResponse = async (city: string, history: IMessage[]): Promise<IMessage> => {
	const lastLetter = getLastLetter(city);

	const delay = getRandomDelay();
	await sleep(delay);

	let result = CITIES.filter((storeCity) => storeCity.name[0].toLowerCase() === lastLetter);

	if (history.length > 0) {
		result = result.filter(
			(storeCity) =>
				!history.some((historyMessage) => storeCity.name === historyMessage.content),
		);
	}

	return {type: 'bot', content: result[0].name};
};

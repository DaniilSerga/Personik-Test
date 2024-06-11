import {CITIES} from 'constants/index';

const getRandowDelay = () => {
	const min = 10;
	const max = 121;
	return Math.floor(Math.random() * (max - min + 1) + min) * 100;
};

const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getBotResponse = async (city: string, history: {id: number; name: string}[]) => {
	const lastLetter = city.at(-1)!;
	const delay = getRandowDelay();

	await sleep(delay);

	const sameStartLetter = CITIES.filter(
		(storeCity) =>
			storeCity.name[0].toLowerCase() === lastLetter &&
			history.some((historyCity) => storeCity.name !== historyCity.name),
	);

	return sameStartLetter[0];
};

export const getLastLetter = (word: string, lowerCase: boolean = true): string => {
	const lastLetter =
		word.at(-1) === 'ь' || word.at(-1) === 'ъ' || word.at(-1) === 'ы'
			? word.at(-2)!
			: word.at(-1)!;

	return lowerCase ? lastLetter.toLowerCase() : lastLetter.toUpperCase();
};

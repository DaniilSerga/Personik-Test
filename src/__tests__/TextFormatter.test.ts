import {getLastLetter} from 'utils/textFormatter';

describe('Messages helper', () => {
	test('It gets last letter of a word', () => {
		const word = 'Москва';

		expect(getLastLetter(word)).toEqual('а');
	});

	test("It gets a letter before the last when the word ends with 'ы' 'ь' 'ъ'", () => {
		const words = ['Рязань', 'Апатиты'];

		words.forEach((word) => {
			expect(getLastLetter(word)).toEqual(word.at(-2));
		});
	});
});

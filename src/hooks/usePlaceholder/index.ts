import {useState} from 'react';

const usePlaceholder = () => {
	const [placeholder, setPlaceholder] = useState(
		'Напишите любой город, например: Где вы живете?',
	);

	const updatePlaceholder = (type: 'pending' | 'userTurn', lastLetter?: string) => {
		switch (type) {
			case 'pending':
				setPlaceholder('Ожидаем ответа соперника...');
				break;
			case 'userTurn':
				setPlaceholder(`Знаете город на букву: "${lastLetter}?"`);
				break;
		}
	};

	return {placeholder, updatePlaceholder};
};

export default usePlaceholder;

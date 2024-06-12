import CITIES from 'constants/citiesList';
import {IMessage} from 'types';

export const isCityRepeated = (city: string, history: IMessage[]) => {
	return history.some((historyCity) => historyCity.content === city);
};

export const isCityExist = (city: string) => {
	return CITIES.some((el) => el.name === city);
};

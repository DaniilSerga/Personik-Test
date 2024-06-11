import dayjs from 'dayjs';
import {IMessage} from 'types';

export interface Props {
	timer: dayjs.Dayjs;
	timerId: NodeJS.Timer;
	history: IMessage[];
}

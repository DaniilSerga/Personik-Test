import dayjs from 'dayjs';

export interface ILastMessage {
	message: string;
	winner: 'bot' | 'user';
	time: dayjs.Dayjs;
}

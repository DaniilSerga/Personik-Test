import dayjs from 'dayjs';
import {useState} from 'react';
import {ILaunchTimerProps} from './type';

const useTimer = () => {
	const [timer, setTimer] = useState(dayjs(0).minute(2).second(0));
	const [timerId, setTimerId] = useState<NodeJS.Timer>();

	const resetTimer = () => {
		clearInterval(timerId);
		setTimer(dayjs().minute(2).second(0));
	};

	/**
	 * Starts a 2 minutes timer
	 * @param withReset means that timer will be resetted to default value (2 minutes)
	 */
	const launchTimer = ({withReset}: ILaunchTimerProps) => {
		if (withReset) {
			resetTimer();
		}

		setTimerId(
			setInterval(() => {
				setTimer((prevTimer) => prevTimer.subtract(1, 'second'));
			}, 1000),
		);
	};

	return {timer, timerId, launchTimer, resetTimer};
};

export default useTimer;

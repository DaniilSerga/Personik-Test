import dayjs from 'dayjs';
import {useState} from 'react';

const useTimer = () => {
	const [timerId, setTimerId] = useState<NodeJS.Timer>();
	const [timer, setTimer] = useState(dayjs(0).minute(2).second(0));

	const resetTimer = () => {
		clearInterval(timerId);
		setTimer(dayjs().minute(0).second(3));
	};

	/**
	 * Starts a 2 minutes timer
	 * @param withReset means that timer will be resetted to default value (2 minutes)
	 */
	const launchTimer = (withReset: boolean) => {
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

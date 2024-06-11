import React, {FC, useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';
import {getBotResponse} from 'services/botResponse';
import {IMessage} from 'types';

const MainPage: FC = () => {
	const [isUserTurn, setUserTurn] = useState<boolean | null>(null);
	const [placeholder, setPlaceholder] = useState(
		'Напишите любой город, например: Где вы живете?',
	);
	const [timer, setTimer] = useState(dayjs().minute(2).second(0));
	const [timerId, setTimerId] = useState<any>();
	const [history, setHistory] = useState<IMessage[]>([]);
	const [userInput, setUserInput] = useState('');
	const [completness, setCompletness] = useState(0);
	const listBottomRef = useRef<HTMLDivElement>(null);

	const launchTimer = () => {
		if (history.length !== 0) {
			setUserTurn(!isUserTurn);
			clearInterval(timerId);
			setTimer(dayjs().minute(2).second(0));
		}

		const intervalId = setInterval(() => {
			setTimer((prevTimer) => prevTimer.subtract(1, 'second'));
		}, 1000);

		setTimerId(intervalId);
	};

	const submitAnswer = async () => {
		setHistory([...history, {type: 'user', content: userInput!}]);
		launchTimer();
		setUserInput('');

		await getBotResponse(userInput, history).then((res) => {
			setHistory((prevHistory) => [...prevHistory, res]);
		});
	};

	useEffect(() => {
		const initialTime = 120;
		const currentTime = timer.get('minute') * 60 + timer.get('second');

		const res = 100 - (currentTime / initialTime) * 100;

		setCompletness(res);
	}, [timer]);

	useEffect(() => {
		if (history.length > 0 && listBottomRef) {
			listBottomRef.current!.scrollIntoView();
		}
	}, [history]);

	return (
		<div className="grid place-items-center h-screen bg-coolGray-200">
			<div className="flex-col justify-center items-center bg-white shadkw max-w-xl w-full rounded-2xl">
				{/* heading */}
				<div className="flex justify-between">
					<p>
						{isUserTurn || isUserTurn === null
							? 'Сейчас ваша очередь'
							: 'Сейчас очередь соперника'}
					</p>
					<p>{timer.format('mm:ss')}</p>
				</div>
				{/* progress bar */}
				<div className="h-[10px] bg-gray-100">
					<div
						style={{width: `${completness}%`}}
						className="h-full w-[60%] bg-violet-300 transition-all duration-300"></div>
				</div>
				{/* Content */}
				<div className="pt-[40px] pb-[20px] px-[16px]">
					{/* messages */}
					<div className="h-[320px] max-h-[320px]">
						{history.length === 0 ? (
							<div className="flex justify-center items-center h-full">
								<p className="text-gray-400 text-sm">
									Первый участник вспоминает города...
								</p>
							</div>
						) : (
							<>
								<ul className={'flex flex-col gap-[8px] h-full overflow-auto'}>
									{history.map((message, index) => (
										<li
											key={index}
											className={
												message.type === 'user'
													? 'self-end bg-violet-500 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px]'
													: 'self-start bg-violet-50 rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px]'
											}>
											<p
												className={
													message.type === 'user'
														? 'text-white'
														: 'text-gray-700'
												}>
												{message.content}
											</p>
										</li>
									))}
								</ul>
								<div ref={listBottomRef}></div>
							</>
						)}
					</div>
					{/* total cities */}
					{history.length > 0 && (
						<p className="text-center text-gray-400 text-sm">
							Всего перечислено городов: {history.length}
						</p>
					)}
					{/* send message */}
					<div className="flex justify-between bg-coolGray-100 p-[8px] mt-[16px] pl-[12px] rounded-[6px]">
						<input
							className="w-full placeholder:text-gray-700 bg-transparent focus:outline-none"
							placeholder={placeholder}
							value={userInput}
							onChange={(e) => setUserInput(e.target.value)}
						/>
						<button
							className="flex justify-center items-center size-8 bg-violet-500 hover:bg-violet-400 rounded-md transition-colors"
							disabled={userInput.length === 0}
							onClick={() => submitAnswer()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6 cursor-pointer text-white">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;

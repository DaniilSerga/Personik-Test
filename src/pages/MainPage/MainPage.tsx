import React, {FC, useContext, useEffect, useState} from 'react';
import {getBotResponse} from 'services/botResponse';
import {IMessage} from 'types';
import {toast} from 'react-toastify';
import {Header, MessagesList, ProgressBar} from 'components/MainPage';
import {getLastLetter} from 'utils/textFormatter';
import {isCityRepeated} from 'utils/messagesHelper';
import useTimer from 'hooks/useTimer';
import {useNavigate} from 'react-router-dom';
import {HistoryContext} from 'context';

const MainPage: FC = () => {
	const navigate = useNavigate();
	const {setLastMessage} = useContext(HistoryContext);
	const [isUserTurn, setUserTurn] = useState(true);
	const [history, setHistory] = useState<IMessage[]>([]);
	const [userInput, setUserInput] = useState('');
	const [placeholder, setPlaceholder] = useState(
		'Напишите любой город, например: Где вы живете?',
	);
	const {timer, launchTimer, resetTimer} = useTimer();

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

	const submitAnswer = async () => {
		if (
			history.length !== 0 &&
			userInput[0].toLowerCase() !== getLastLetter(history.at(-1)!.content!)
		) {
			toast.error(
				'Первая буква текущего города должна совпадать с последней буквой предыдущего!',
			);
			return;
		}

		if (isCityRepeated(userInput, history)) {
			toast.error('Город не должен повторяться!');
			return;
		}

		setUserTurn(false);
		setHistory([...history, {type: 'user', content: userInput!}]);
		setUserInput('');

		await getBotResponse(userInput, history).then((res) => {
			const lastLetter = getLastLetter(res.content)!.toUpperCase();
			setHistory((prevHistory) => [...prevHistory, res]);
			updatePlaceholder('userTurn', lastLetter.toUpperCase());
			setUserTurn(true);
		});
	};

	useEffect(() => {
		if (timer.get('minute') === 0 && timer.get('second') === 0) {
			const lastMessage = history.at(-1)!;
			setLastMessage(lastMessage.content, lastMessage.type, history.length);
			resetTimer();
			navigate('/result');
		}
	}, [timer]);

	useEffect(() => {
		if (history.length !== 0) {
			launchTimer(true);
		}
	}, [isUserTurn]);

	return (
		<main className="cardWrapper">
			<div className="card">
				{/* heading */}
				<Header isUserTurn={isUserTurn} timer={timer} />
				{/* progress bar */}
				<ProgressBar timer={timer} />
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
							<MessagesList history={history} />
						)}
					</div>
					{/* total cities */}
					{history.length > 0 && (
						<p className="text-center text-gray-400 text-sm mt-[20px]">
							Всего перечислено городов: {history.length}
						</p>
					)}
					{/* send message */}
					<div className="flex justify-between bg-coolGray-100 p-[8px] mt-[16px] pl-[12px] rounded-[6px]">
						<input
							className="w-full placeholder:text-gray-700 disabled:placeholder:text-gray-400 bg-transparent focus:outline-none"
							placeholder={placeholder}
							disabled={!isUserTurn}
							value={userInput}
							onChange={(e) => setUserInput(e.target.value)}
						/>
						<button
							className="cursor-pointer disabled:cursor-default flex justify-center items-center size-8 bg-violet-500 hover:bg-violet-400 disabled:bg-gray-400 rounded-md shadow transition-colors"
							disabled={userInput.length === 0 || !isUserTurn}
							onClick={() => submitAnswer()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6 text-white">
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
		</main>
	);
};

export default MainPage;

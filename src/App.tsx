import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPage, OnboardingPage, ResultPage} from 'pages';
import {HistoryContext} from 'context';
import dayjs from 'dayjs';
import {ILastMessage} from 'types/LastMessage';

const App = () => {
	const [lastMessage, setLastMessage] = useState<ILastMessage>({
		message: '',
		winner: 'bot',
		time: dayjs(0),
	});
	const [historyLength, setHistoryLength] = useState(0);

	const updateLastMessage = (
		message: string,
		winner: 'user' | 'bot',
		historyLength: number,
		time: dayjs.Dayjs,
	) => {
		setLastMessage({message, winner, time});
		setHistoryLength(historyLength);
	};

	return (
		<HistoryContext.Provider
			value={{lastMessage, historyLength, setLastMessage: updateLastMessage}}>
			<Routes>
				<Route index element={<OnboardingPage />} />
				<Route path="/main-page" element={<MainPage />} />
				<Route path="/result" element={<ResultPage />} />
			</Routes>
		</HistoryContext.Provider>
	);
};

export default App;

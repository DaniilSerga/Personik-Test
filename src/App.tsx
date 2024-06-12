import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPage, OnboardingPage, ResultPage} from 'pages';
import {HistoryContext} from 'context';

import './App.scss';

const App = () => {
	const [lastMessage, setLastMessage] = useState<{message: string; winner: 'bot' | 'user'}>({
		message: '',
		winner: 'bot',
	});
	const [historyLength, setHistoryLength] = useState(0);

	const updateLastMessage = (message: string, winner: 'user' | 'bot', historyLength: number) => {
		setLastMessage({message, winner});
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

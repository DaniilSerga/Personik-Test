import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPage, OnboardingPage, ResultPage} from 'pages';
import {HistoryContext} from 'context';

import './App.scss';

const App = () => {
	const [lastMessage, setLastMessage] = useState('');

	const updateLastMessage = (message: string) => {
		setLastMessage(message);
	};

	return (
		<HistoryContext.Provider value={{lastMessage, setLastMessage: updateLastMessage}}>
			<Routes>
				<Route index element={<OnboardingPage />} />
				<Route path="/main-page" element={<MainPage />} />
				<Route path="/result" element={<ResultPage />} />
			</Routes>
		</HistoryContext.Provider>
	);
};

export default App;

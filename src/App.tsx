import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import {MainPage, OnboardingPage} from 'pages';

const App = () => {
	return (
		<Routes>
			<Route index element={<OnboardingPage />} />
			<Route path="/main-page" element={<MainPage />} />
		</Routes>
	);
};

export default App;

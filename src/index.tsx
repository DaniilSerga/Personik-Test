import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
			<App />
			<ToastContainer position="bottom-right" />
		</BrowserRouter>
	</React.StrictMode>,
);

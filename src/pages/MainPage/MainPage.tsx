import React, {FC} from 'react';
import {Link} from 'react-router-dom';

const MainPage: FC = () => {
	return (
		<div>
			<h1>Main page!</h1>
			<Link to="/">Back</Link>
		</div>
	);
};

export default MainPage;

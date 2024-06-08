import React, {FC} from 'react';
import {Link} from 'react-router-dom';

const OnboardingPage: FC = () => {
	return (
		<div>
			<h1>onboarding</h1>
			<Link to="/main-page">Skip</Link>
		</div>
	);
};

export default OnboardingPage;

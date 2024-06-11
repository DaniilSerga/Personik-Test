import {HistoryContext} from 'context';
import React, {FC, useContext} from 'react';

const ResultPage: FC = () => {
	const {lastMessage} = useContext(HistoryContext);

	return (
		<div>
			<p className="text-black text-xl">{lastMessage}</p>
		</div>
	);
};

export default ResultPage;

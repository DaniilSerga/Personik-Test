import React, {FC, useContext, useEffect, useState} from 'react';
import {Props} from './type';

const ProgressBar: FC<Props> = ({timer}) => {
	const [completness, setCompletness] = useState(0);

	useEffect(() => {
		const initialTime = 120;
		const currentTime = timer.get('minute') * 60 + timer.get('second');

		const res = 100 - (currentTime / initialTime) * 100;

		setCompletness(res);
	}, [timer]);

	return (
		<div className="h-[10px] bg-gray-100">
			<div
				style={{width: `${completness}%`}}
				className="h-full w-[60%] bg-violet-300 transition-all duration-300"></div>
		</div>
	);
};

export default ProgressBar;

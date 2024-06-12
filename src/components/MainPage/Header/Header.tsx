import React, {FC} from 'react';
import {Props} from './type';

const Header: FC<Props> = ({isUserTurn, timer}) => {
	return (
		<div className="flex justify-between items-center py-[17px] px-[16px]">
			<p className="text-base">
				{isUserTurn ? 'Сейчас ваша очередь' : 'Сейчас очередь соперника'}
			</p>
			<p className="text-xl text-black font-medium">{timer.format('mm:ss')}</p>
		</div>
	);
};

export default Header;

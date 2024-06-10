import React, {FC} from 'react';
import {Link} from 'react-router-dom';

const OnboardingPage: FC = () => {
	return (
		<div className="grid place-items-center h-screen bg-coolGray-200">
			<div className="flex-col justify-center items-center bg-white shadow max-w-xl rounded-2xl">
				{/* heading */}
				<div className="flex items-center justify-center py-[17px] pb-[20px]">
					<h1 className="text-base text-black">Игра в города на время</h1>
				</div>
				<div className="h-0 mt-[3px] border-gray-100 border-t-3"></div>
				{/* content */}
				<div className="flex flex-col gap-[24px] p-[24px]">
					<p className="prose prose-sm m-0">
						Цель: Назвать как можно больше реальных городов.
					</p>
					{/* FIX: Disks position is not same as on the design (list-inside must be used, but there's problems w it) */}
					<ul className="prose prose-sm list-disc box-border marker:text-gray-700 text-gray-700">
						<li className="m-0">
							<p className="m-0">Запрещается повторение городов.</p>
						</li>
						<li className="m-0">
							<p className="m-0">
								Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого
								бы пропускаем эту букву и игрок должен назвать город на букву
								стоящую перед ъ или ь знаком.
							</p>
						</li>
						<li className="m-0">
							<p className="m-0">
								Каждому игроку дается 2 минуты на размышления, если спустя это время
								игрок не вводит слово он считается проигравшим.
							</p>
						</li>
					</ul>
					<Link
						className="px-[16px] py-[8px] text-white text-base font-medium bg-violet-500 hover:bg-violet-400 transition-all no-underline rounded-[4px] self-center"
						to="/main-page">
						Начать игру
					</Link>
				</div>
			</div>
		</div>
	);
};

export default OnboardingPage;

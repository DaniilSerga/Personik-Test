import {HistoryContext} from 'context';
import React, {FC, useContext} from 'react';
import {Link} from 'react-router-dom';

const ResultPage: FC = () => {
	const {lastMessage, historyLength} = useContext(HistoryContext);

	return (
		<main className="cardWrapper">
			<div className="card py-[40px] gap-8">
				{/* heading */}
				<div className="text-black text-xl text-center">
					{lastMessage.winner === 'bot' ? (
						<>
							<p>К сожалению твое время вышло!</p>
							<p>Твой противник победил!</p>
						</>
					) : (
						<>
							<p>Поздравляем тебя с победой!</p>
							<p>Твой противник не вспомнил нужный город!</p>
						</>
					)}
				</div>
				<p
					className={`text-3xl text-center font-medium ${lastMessage.winner === 'bot' ? 'text-red-600' : 'text-green-600'}`}>
					00:00
				</p>

				<div className="text-xl text-center">
					<p>Всего было перечислено городов: {historyLength}</p>
					<p>Очень не плохой результат!</p>
				</div>

				<div className="text-center">
					<p className="text-xl text-black">Последний город названный победителем</p>
					<p className="text-2xl font-medium">{lastMessage.message}</p>
				</div>

				<Link to="/main-page" className="buttonPrimary self-center">
					Начать новую игру
				</Link>
			</div>
		</main>
	);
};

export default ResultPage;

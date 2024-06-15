import React, {FC, useEffect, useRef} from 'react';
import {Props} from './type';

/**
 *
 * @param history - FUCK YEAH
 * @returns
 */
const MessagesList: FC<Props> = ({history}) => {
	const listBottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (history.length > 0 && listBottomRef) {
			listBottomRef.current!.scrollIntoView();
		}
	}, [history]);

	return (
		<ul className="flex flex-col gap-[8px] h-full overflow-auto">
			{history.map((message, index) => (
				<li
					key={index}
					className={
						message.type === 'user'
							? 'self-end bg-violet-500 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px]'
							: 'self-start bg-violet-50 rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px]'
					}>
					<p
						className={
							message.type === 'user'
								? 'text-white text-base py-[6px] px-[16px]'
								: 'text-gray-700 text-base py-[6px] px-[16px]'
						}>
						{message.content}
					</p>
				</li>
			))}
			<div ref={listBottomRef}></div>
		</ul>
	);
};

export default MessagesList;

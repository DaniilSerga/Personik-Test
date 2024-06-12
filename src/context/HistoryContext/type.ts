export interface IHistoryContextProps {
	lastMessage: {message: string; winner: 'user' | 'bot'};
	historyLength: number;
	setLastMessage: (message: string, winner: 'user' | 'bot', historyLength: number) => void;
}

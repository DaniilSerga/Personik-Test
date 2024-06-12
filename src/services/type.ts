export interface IBotResponse {
	type: 'user' | 'bot';
	content: string | null;
}

import { useState } from 'react';

export const Input = ({ value }: { value: number }) => {
	const [inputValue, setInputValue] = useState<number>(value);

	return (
		<input type="number" max="999" value={inputValue} onChange={(e) => setInputValue(e.target.value as unknown as number)} />
	);
};

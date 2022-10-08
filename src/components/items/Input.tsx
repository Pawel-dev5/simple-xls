import { useState, useContext, ChangeEvent } from 'react';

// CONTEXT
import { ContextData } from 'components/hooks/useExcel';

// MODELS
import { GridObjectInterface } from 'components/models/hooks';

export const Input = (item: GridObjectInterface) => {
	const { updateInputs } = useContext(ContextData);
	const { value } = item;
	const [inputValue, setInputValue] = useState<number | string>(value);
	const limit = 999;

	const onClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		if (newValue <= limit) {
			const newObject = {
				...item,
				value: newValue,
			};

			setInputValue(newValue);
			updateInputs(newObject);
		}
	};

	return <input type="number" max={limit} value={inputValue} onChange={(e) => onClickHandler(e)} />;
};

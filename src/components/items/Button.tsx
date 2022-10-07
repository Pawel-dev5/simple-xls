// MODELS
import { ButtonInterface } from 'components/models/items';

export const Button = ({ onClick, disabled, icon }: ButtonInterface) => (
	<button type="button" disabled={disabled} onClick={onClick}>
		{icon}
	</button>
);

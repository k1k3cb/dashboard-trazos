import { StyledInput } from './styles';

const Input = ({ type, placeholder ,value, onInput}) => {
	return <StyledInput type={type} placeholder={placeholder} value={value} onInput={onInput}/>;
};

export default Input;

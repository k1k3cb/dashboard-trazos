import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/UI/input/Input';
import { AuthContext } from '../../../contexts/AuthContext';
import { loginRequest } from '../../../utils/api/auth.api';
import {
	StyledContainer,
	StyledForgot,
	StyledFormFooter,
	StyledImg,
	StyledLeftContent,
	StyledLoginCard,
	StyledRightContent,
	StyledSubmitBtn
} from './styles';

const LoginPage = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({
		credential: '',
		password: ''
	});
	const navigate = useNavigate();

	if (loading) return;

	return (
		<StyledContainer>
			<StyledLoginCard>
				<StyledLeftContent>
					<h1>Log in</h1>
					<form
						onSubmit={event =>
							handleSubmit(event, loginData, navigate, userData, setUserData)
						}
					>
						<Input
							type='text'
							placeholder='Email or username'
							value={loginData.credential}
							onInput={ev =>
								setLoginData({ ...loginData, credential: ev.target.value })
							}
						/>
						<Input
							type='password'
							placeholder='Password'
							value={loginData.password}
							onInput={ev =>
								setLoginData({ ...loginData, password: ev.target.value })
							}
						/>
						<StyledFormFooter>
							<StyledForgot>Forgot your password?</StyledForgot>

							<StyledSubmitBtn type='submit'> Log in</StyledSubmitBtn>
						</StyledFormFooter>
					</form>
				</StyledLeftContent>

				<StyledRightContent>
					<StyledImg src='assets/images/strong_goat_logo.webp' alt='' />
				</StyledRightContent>
			</StyledLoginCard>
		</StyledContainer>
	);
};

const handleSubmit = async (
	event,
	loginData,
	navigate,
	userData,
	setUserData
) => {
	event.preventDefault();
	console.log('loginData', loginData);
	try {
		const data = await loginRequest(loginData, setUserData);
		navigate(data.redirect);
		
	} catch (error) {
		console.error('Error de inicio de sesión:', error);
		// Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error
	}
};

export default LoginPage;

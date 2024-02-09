import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';
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
	return (
		<StyledContainer>
			<StyledLoginCard>
				<StyledLeftContent>
					<h1>Log in</h1>
					<form action=''>
						<Input type='email' placeholder='Email' />
						<Input type='password' placeholder='Password' />
						<StyledFormFooter>
							<StyledForgot>Forgot your password?</StyledForgot>
							<Link to='/dashboard'>
								<StyledSubmitBtn type='submit'> Log in</StyledSubmitBtn>
							</Link>
						</StyledFormFooter>
					</form>
				</StyledLeftContent>

				<StyledRightContent>
					<StyledImg src='public/assets/images/strong_goat_logo.webp' alt='' />
				</StyledRightContent>
			</StyledLoginCard>
		</StyledContainer>
	);
};

export default LoginPage;

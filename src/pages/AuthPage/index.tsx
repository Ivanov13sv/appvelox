import { useState, FC, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, Location, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { useActions } from 'hooks/useActions';

interface AuthPageProps {
	isAuth?: boolean;
	setIsAuth?: (isAuth: boolean) => void;
}

export const AuthPage: FC<AuthPageProps> = ({ setIsAuth }) => {
	const [value, setValue] = useState('');
	const navigate = useNavigate();
	const location: Location = useLocation();
	const { token } = useSelector((state: RootState) => state.userAuth);
	const dispatch = useDispatch();


	// @ts-ignore
	const fromPage = location.state?.from?.pathname || '/';

	// console.log(location.state?.from)

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// setAuth();
		// @ts-ignore
		// navigate(location.fromPage);
	};

	if (token) {
		return <Navigate to="/log" />;
	}

	return (
		<Wrapper>
			{fromPage}
			<form onSubmit={onSubmit}>
				<input
					value={value}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
					placeholder="name"
				/>
				<button>Sign in</button>
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background: grey;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40px;
	flex-direction: column;
`;

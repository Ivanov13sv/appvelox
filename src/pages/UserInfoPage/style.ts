import styled from 'styled-components';

export const ProfileImage = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	box-shadow: 0px 0px 5px #abaaaf;
	position: relative;
	> * {
		width: 100%;
		height: 100%;
	}

	label {
		position: absolute;
		bottom: 20%;
		right: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		box-shadow: 0px 0px 5px #abaaaf;
		transition: transform 0.1s ease-in-out;
		background: green;
		input {
			display: none;
		}
		cursor: pointer;
		background: ${({ theme }) => theme.color.bg};
		svg {
            transition:  color 0.1s ease-in-out;
			color: #abaaaf;
		}

		&:hover {
			transform: scale(1.03);
			svg {
				color: grey;
			}
		}
	}
`;


export const Form = styled.form`
	width: 250px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	h3 {
		font-weight: 300;
		padding-bottom: 5px;
	}
	> :last-child {
		margin-top: 10px;
	}
`;

export const Body = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 2rem;
	flex: 1 1 50%;
	gap: 3rem;
	flex-wrap: wrap;
`;

export const InfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	h2 {
		font-weight: 400;
	}
`;

export const PrivateInfo = styled(InfoBlock)`
	justify-content: flex-start;
`;


export const ModalBody = styled.section`
	width: 100%;
	height: 100%;
	padding: 0 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	h2 {
		font-size: 1.4rem;
		text-align: center;
		padding-bottom: 2rem;
	}
`;

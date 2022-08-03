import styled from 'styled-components';

export const ProfileImage = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	/* border: 2px solid ${({ theme }) => theme.color.main}; */
	box-shadow: 0px 0px 5px #abaaaf;
	position: relative;
	> * {
		width: 100%;
		height: 100%;
	}
	/* input[type='file'] {
		border: none;
		outline: none;
		background: red;
		color: white;
		width: 30px;
		height: 30px;
		position: absolute;
        bottom: 20%;
        right: 0;
		&::-webkit-file-upload-button {
			display: none;
		}
        &:focus{
            border: 2px solid green;
        }
	} */
	.upload {
		position: absolute;
		bottom: 20%;
		right: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		/* border: 2px solid ${({ theme }) => theme.color.main}; */
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

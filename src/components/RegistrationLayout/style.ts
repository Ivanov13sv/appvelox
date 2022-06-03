import styled from 'styled-components';

export const Layout = styled.section`
padding-top: 50px;
min-height: 100%;
	h2 {
		font-weight: 300;
		font-size: 28px;
		line-height: 33px;
		text-align: center;
		padding-bottom: 15px;
	}
	> p {
		font-weight: 300;
		font-size: 14px;
		line-height: 17px;
		text-align: center;
		color: #000000;
		span {
			font-weight: 300;
			font-size: 14px;
			line-height: 17px;
			text-decoration-line: underline;
			color: #50caff;
		}
		margin-bottom: 29px;
	}

	> form {
		max-width: 347px;
		margin: 0 auto;
		padding-top: 29px;
		display: flex;
		flex-direction: column;
		> *:not(:last-child) {
			margin-bottom: 20px;
		}
	}
`;

import styled from 'styled-components';

export const SuccessReg = styled.section`
	padding: 30px 40px;
	position: absolute;
	background: ${({ theme }) => theme.color.main};
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 50;
	width: 100%;
	min-height: 100%;
	display: flex;
	/* align-items: center; */
	flex-direction: column;

	> header {
		height: 40px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
		width: 100%;
	}
`;

export const SuccessBody = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex: 1 1 auto;
	> h2 {
		font-weight: 400;
		font-size: 28px;
		line-height: 33px;
		text-align: center;
		color: #ffffff;
		padding: 50px 0 10px 0;
	}

	> span {
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		text-align: center;
		color: #ffffff;
	}
`;

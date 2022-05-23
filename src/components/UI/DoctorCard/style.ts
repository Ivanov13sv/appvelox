import styled from 'styled-components';

export const Card = styled.li`
	width: 475px;
	height: 174px;
	box-shadow: 0px 0px 5px #ebe7ff;
	border-radius: 5px;
`;

export const CardBody = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

export const Date = styled.span`
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #000000;
	margin-bottom: 5px;
`;

export const Address = styled.p`
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;

	color: #000000;
`;

export const Hospital = styled(Address)``;

export const DoctorInfo = styled.div`
	gap: 10px;
	margin-top: 10px;
	display: flex;
	align-items: center;

	button {
		margin-left: auto;
	}
`;

export const PersonalInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DoctorName = styled.span`
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
	letter-spacing: .5px;
`;

export const DoctorsJob = styled.span`
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #ebe7ff;
`;

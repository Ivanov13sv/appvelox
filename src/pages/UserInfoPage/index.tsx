import { LoadableImage } from 'components/LoadbleImage';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';
import { Input } from 'components/UI/Input';
import { ProfilePhoto } from 'components/UI/ProfilePhoto';
import { doc, updateDoc } from 'firebase/firestore';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { useInput } from 'hooks/useInput';
import { ChangeEvent, FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { IIUser } from 'types/iuser';
import { useAuth, upload, db } from '../../firebase';
import { parseISO } from 'date-fns';
import defaultImage from 'assets/img/defaultImage.jpg';

// import { AiFillCamera } from 'react-icons/ai';
import { AiOutlineCamera } from 'react-icons/ai';
import { Calendar } from 'components/UI/Calendar';

import * as S from './style';
import { Avatar } from 'components/UI/Avatar';
import styled from 'styled-components';
import { DateTimePicker } from 'components/MakeAnAppointment/style';
import { Datepicker } from 'components/UI/Datepicker';

interface IUserInfoPage {
	user?: IIUser;
}

export const UserInfoPage: FC<IUserInfoPage> = () => {
	const currentUser = useAuth();
	const { avatar } = useAppSelector(state => state.userAuth);
	const { user, loading } = useAppSelector(state => state.currentUser);
	const [current, setCurrent] = useState(user);
	const { updateAvatar, fetchCurrentUser, updateUserData } = useActions();
	const { firstName, lastName, patronymic, phone, dOb } = current;

	const [photo, setPhoto] = useState<any>();
	const [loadingPhoto, setLoading] = useState(false);

	const firstNameInput = useInput(firstName);
	const lastNameInput = useInput(lastName);
	const patronymicInput = useInput(patronymic);
	const phoneInput = useInput(phone);
	const [date, setDate] = useState<any>(dOb);
	const [newImage, setNewImage] = useState<any>();

	useEffect(() => {
		firstNameInput.setValue(user.firstName);
		lastNameInput.setValue(user.lastName);
		patronymicInput.setValue(user.patronymic);
	}, [user]);

	// image picker

	async function handleClick() {
		const photoURL = await upload(photo, currentUser, setLoading);
		updateAvatar(photoURL);
	}


	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleClick();
		imageHandler(e);
	};

	useEffect(() => {
		setCurrent(user);
		if (user.dOb) {
			setDate(new Date(user.dOb));
		}
	}, [user]);

	// туц
	const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setNewImage(reader.result);
			}
		};
		if (e.target.files){
			reader.readAsDataURL(e.target.files[0]);
			setPhoto(e.target.files[0]);

		}
	};


	return (
		<section className="fields">
			{loading && <h1>Loading</h1>}
			<S.ProfileImage>
				<Avatar src={newImage ? newImage : avatar} alt="avatar" />
				<label className="upload">
					<input type="file" onChange={imageHandler} />
					<AiOutlineCamera size={30} />
				</label>
			</S.ProfileImage>
			<Form onSubmit={handleSubmit}>
				<Input {...firstNameInput} label="Имя" />
				<Input {...lastNameInput} label="Фамилия" />
				<Input {...patronymicInput} label="Отчество" />

				<Datepicker
					placeholderText="13-13-2005"
					selected={new Date(date)}
					onChange={(date: Date) => setDate(date)}
					dateFormat="d MMMM Y"
					shouldCloseOnSelect={true}
				/>
				<button>Сохранить</button>
			</Form>
		</section>
	);
};

const Form = styled.form`
	width: 300px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

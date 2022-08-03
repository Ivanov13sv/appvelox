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

// import { AiFillCamera } from 'react-icons/ai';
import { AiOutlineCamera } from 'react-icons/ai';
import { Calendar } from 'components/UI/Calendar';

import * as S from './style';
import { Avatar } from 'components/UI/Avatar';
import styled from 'styled-components';
import { DateTimePicker } from 'components/MakeAnAppointment/style';

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
	console.log(user)

	const [photo, setPhoto] = useState('');
	const [loadingPhoto, setLoading] = useState(false);

	const firstNameInput = useInput(firstName);
	const lastNameInput = useInput(lastName);
	const patronymicInput = useInput(patronymic);
	const phoneInput = useInput(phone);
	const [date, setDate] = useState<any>(dOb);
	const [logo, setLogo] = useState('');
	const [test, setTest] = useState<IIUser>({
		firstName,
		lastName,
		patronymic,
		phone,
	});

	const input = useInput(firstName);
	// console.log(Date.parse(dOb))
	// https://stackoverflow.com/questions/52247445/how-do-i-convert-a-firestore-date-timestamp-to-a-js-date
	// how to fix Date

	// @ts-ignore

	useEffect(() => {
		firstNameInput.setValue(user.firstName);
		lastNameInput.setValue(user.lastName);
		patronymicInput.setValue(user.patronymic);
	}, [user]);

	// image picker

	const handleCreateBase64 = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files;
		const base64 = await convertToBase64(file);
		// setLogo(base64);
		e.currentTarget.value = '';
	}, []);

	const convertToBase64 = (file: any) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			if (!file) {
				alert('Please select an image');
			} else {
				fileReader.readAsDataURL(file);
				fileReader.onload = () => {
					resolve(fileReader.result);
				};
			}
			fileReader.onerror = error => {
				reject(error);
			};
		});
	};

	function handleChange(e: any) {
		if (e.target.files[0]) {
			setPhoto(e.target.files[0]);
		}
	}

	async function handleClick() {
		const photoURL = await upload(photo, currentUser, setLoading);
		updateAvatar(photoURL);
	}

	const updateData = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (currentUser) {
			const docRef = doc(db, 'user', currentUser?.uid);
			await updateDoc(docRef, {
				firstName: firstNameInput.value,
				lastName: lastNameInput.value,
				patronymic: patronymicInput.value,
				dOb: date,
			}).then(() => {
				fetchCurrentUser();
			});
		}
	};


	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleClick();
		// updateData();
	};

	// useEffect(() => {
	// 	setTest({ ...user });
	// }, [user]);

	useEffect(() => {
		setCurrent(user);
		if (user.dOb) {
			setDate(new Date(user.dOb));
		}
	}, [user]);

	return (
		<section className="fields">
			{loading && <h1>Loading</h1>}
			<S.ProfileImage>
				<Avatar src={avatar} alt="avatar" />
				{/* <ProfilePhoto border="none" photo={avatar} /> */}
				<label className="upload">
					<input type="file" onChange={handleChange} />
					<AiOutlineCamera size={30} />
				</label>
			</S.ProfileImage>
			<Form onSubmit={updateData}>
				<Input {...firstNameInput} label="Имя" />
				<Input {...lastNameInput} label="Фамилия" />
				<Input {...patronymicInput} label="Отчество" />
				<DateTimePicker
					placeholderText='13-13-2005'
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

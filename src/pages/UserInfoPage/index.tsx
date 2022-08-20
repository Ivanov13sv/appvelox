import { Input } from 'components/UI/Input';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { useInput } from 'hooks/useInput';
import { ChangeEvent,  useEffect, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { Avatar } from 'components/UI/Avatar';
import { Datepicker } from 'components/UI/Datepicker';
import { Section } from 'components/Section';
import { Button } from 'components/UI/Button';
import { Modal } from 'components/UI/Modal';
import { useClickOutside } from 'hooks/useClickOutside';
import { LocalLoader } from 'components/UI/LocalLoader';
import { IIUser } from 'types/iuser';
import { useAuth} from '../../firebase';

import * as S from './style';

export const UserInfoPage = () => {
	const currentUser = useAuth();
	const {
		authInfo: { avatar },
	} = useAppSelector(state => state.authInfo);
	const { user, loading } = useAppSelector(state => state.currentUser);
	const { updateUserData, updateUserAvatar, updatePassword, updateUserEmail } = useActions();
	const [current, setCurrent] = useState(user);
	const { firstName, lastName, patronymic, dOb } = current;
	const [newEmailModal, setNewEmailModal] = useState(false);
	// preview image
	const [photo, setPhoto] = useState<any>();
	const [newImage, setNewImage] = useState<any>();
	// input fields
	const firstNameInput = useInput(firstName);
	const lastNameInput = useInput(lastName);
	const patronymicInput = useInput(patronymic);
	const [date, setDate] = useState<any>(dOb);

	// reauth
	const [currentPass, setCurrentPass] = useState('');
	const [newPass, setNewPasss] = useState('');
	const [confirmNewPass, setConfirmNewpass] = useState('');
	const [newEmail, setNewEmail] = useState('');

	const [emailLogin, setEmailLogin] = useState('');
	const [passwordlLogin, setPasswordLogin] = useState('');


	const ref = useClickOutside(() => {
		setNewEmailModal(false);
	});

	const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setNewImage(reader.result);
			}
		};
		if (e.target.files) {
			reader.readAsDataURL(e.target.files[0]);
			setPhoto(e.target.files[0]);
		}
	};

	const updateUserInfo = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const updatedUser: IIUser = {
			firstName: firstNameInput.value,
			lastName: lastNameInput.value,
			patronymic: patronymicInput.value,
			dOb: date.getTime(),
		};
		updateUserData(updatedUser);
		if (photo) {
			updateUserAvatar({
				currentUser,
				loadingPhoto: photo,
				statePhoto: newImage,
			});
			setPhoto(null);
		}
	};

	useEffect(() => {
		setCurrent(user);
		if (user.dOb) {
			setDate(new Date(user.dOb));
		}
	}, [user]);

	useEffect(() => {
		firstNameInput.setValue(user.firstName);
		lastNameInput.setValue(user.lastName);
		patronymicInput.setValue(user.patronymic);
	}, [user]);

	return (
		<Section>
			<S.Body>
				<S.InfoBlock>
					<h2>Персональные данные</h2>
					<S.ProfileImage>
						<Avatar src={newImage ? newImage : avatar} alt="avatar" />
						<label>
							<input type="file" onChange={imageHandler} />
							<AiOutlineCamera size={30} />
						</label>
					</S.ProfileImage>
					<S.Form>
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
						<Button onClick={updateUserInfo}>
							{loading ? <LocalLoader height="35px" width="35px" /> : 'Сохранить'}
						</Button>
					</S.Form>
				</S.InfoBlock>
				<S.PrivateInfo>
					<h2>Данные авторизации</h2>
					<S.Form>
						<h3>Пароль</h3>

						<Input
							value={currentPass}
							onChange={e => setCurrentPass(e.target.value)}
							label="Текущий пароль"
							type="password"
						/>
						<Input
							value={newPass}
							onChange={e => setNewPasss(e.target.value)}
							label="Новый пароль"
							type="password"
						/>
						<Input
							value={confirmNewPass}
							onChange={e => setConfirmNewpass(e.target.value)}
							label="Повторите пароль"
							type="password"
						/>
						<Button
							onClick={() => updatePassword({ newPass, currentPass, currentUser })}
						>
							Изменить пароль
						</Button>
					</S.Form>

					<S.Form>
						<h3>Почта</h3>
						<Input
							label="Введите новую почту"
							value={newEmail}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setNewEmail(e.target.value)
							}
						/>
						<Button onClick={() => setNewEmailModal(true)}>Изменить почту</Button>
					</S.Form>

					{newEmailModal && (
						<Modal isOpen={newEmailModal}>
							<S.ModalBody ref={ref}>
								<h2>Нам необходимо убедиться что это действительно Вы.</h2>
								<Input
									label="Введите действующую почту"
									value={emailLogin}
									onChange={e => setEmailLogin(e.target.value)}
								/>
								<Input
									label="Введите пароль"
									value={passwordlLogin}
									onChange={e => setPasswordLogin(e.target.value)}
								/>
								<Button
									onClick={() =>
										updateUserEmail({
											currentUser,
											emailLogin,
											passwordlLogin,
											newEmail,
										})
									}
								>
									{false ? <LocalLoader height="35px" width="35px" /> : 'Ok'}
								</Button>
							</S.ModalBody>
						</Modal>
					)}
				</S.PrivateInfo>
			</S.Body>
		</Section>
	);
};

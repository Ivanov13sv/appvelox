import { Input } from 'components/UI/Input';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { useInput } from 'hooks/useInput';
import { ChangeEvent, useEffect, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { Avatar } from 'components/UI/Avatar';
import { Datepicker } from 'components/UI/Datepicker';
import { Section } from 'components/Section';
import { Button } from 'components/UI/Button';
import { Modal } from 'components/UI/Modal';
import { useClickOutside } from 'hooks/useClickOutside';
import { LocalLoader } from 'components/UI/LocalLoader';
import { IIUser } from 'types/iuser';
import { updateEmail, User } from 'firebase/auth';
import { useFetching } from 'hooks/useFetching';
import { INotificationType } from 'types/notification';
import { SectionBackButton } from 'components/UI/SectionBackButton';
import { MdDone } from 'react-icons/md';
import { reAuth, setNewPassword, upload, useAuth } from '../../firebase';

import * as S from './style';

export const UserInfoPage = () => {
    const currentUser = useAuth();
    const {
        authInfo: { avatar },
    } = useAppSelector((state) => state.authInfo);
    const { user, loading } = useAppSelector((state) => state.currentUser);
    const { isOpenEmailModal } = useAppSelector((state) => state.newEmailModal);
    const {
        updateUserData,
        closeNewEmailModal,
        openNewEmailModal,
        addNotification,
        updateAvatar,
        addNotificationWithStory
    } = useActions();
    const [current, setCurrent] = useState(user);
    const { firstName, lastName, patronymic, dOb } = current;

    // preview image
    const [photo, setPhoto] = useState<any>();
    const [newImage, setNewImage] = useState<any>();

    // userInfo fields
    const firstNameInput = useInput(firstName);
    const lastNameInput = useInput(lastName);
    const patronymicInput = useInput(patronymic);
    const [date, setDate] = useState<any>(dOb);

    // auth fields
    const currentPass = useInput('');
    const newPass = useInput('', {});
    const confimrNewPass = useInput('');
    const newEmail = useInput('', { isEmpty: true, isEmail: true });
    const emailLogin = useInput('');
    const passwordLogin = useInput('');

    const [fetchNewEmail, loadingNewEmail] = useFetching(async () => {
        return reAuth(passwordLogin.value, currentUser, emailLogin.value)
            .then(() => {
                updateEmail(currentUser as User, newEmail.value)
                    .then(() => {
                        addNotificationWithStory({
                            id: Date.now(),
                            message: 'Вы успешно изменили почту!',
                            type: INotificationType.success,
                        });

                        resetFormFields();
                        closeNewEmailModal();
                    })
                    .catch(() => {
                        addNotification({
                            id: Date.now(),
                            message: 'Что-то пошло не так',
                            type: INotificationType.warning,
                        });
                    });
            })
            .catch(() => {
                addNotification({
                    id: Date.now(),
                    message: 'Неверный логин или пароль',
                    type: INotificationType.warning,
                });
            });
    });

    const [fetchNewPassword, loadingNewPassword] = useFetching(async () => {
        return setNewPassword(newPass.value, currentPass.value, currentUser)
            .then(() => {
                addNotificationWithStory({
                    id: Date.now(),
                    message: 'Вы изменили пароль!',
                    type: INotificationType.success,
                });
                newPass.setValue('');
                currentPass.setValue('');
                confimrNewPass.setValue('');
            })
            .catch(() => {
                addNotification({
                    id: Date.now(),
                    message: 'Неверный пароль',
                    type: INotificationType.warning,
                });
            });
    });

    const [fetchNewPhoto, loadingNewPhoto] = useFetching(async () => {
        if (photo) {
            return await upload(photo, currentUser).then(() => {
                addNotificationWithStory({
                    id: Date.now(),
                    message: 'Фото успешно обновлено!',
                    type: INotificationType.success,
                });
                setPhoto(null);
                updateAvatar(newImage);
            });
        } else {
            addNotification({
                id: Date.now(),
                message: 'Необходимо выбрать изображение',
                type: INotificationType.warning,
            });
        }
    });

    const ref = useClickOutside(() => {
        closeNewEmailModal();
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

    const resetFormFields = () => {
        currentPass.setValue('');
        newPass.setValue('');
        confimrNewPass.setValue('');
        newEmail.setValue('');
        emailLogin.setValue('');
        passwordLogin.setValue('');
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
    };

    const openEmailModal = () => {
        !newEmail.errorMessage
            ? openNewEmailModal()
            : addNotification({
                  id: Date.now(),
                  type: INotificationType.warning,
                  message: newEmail.errorMessage,
              });
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
        // eslint-disable-next-line
    }, [user]);

    return (
        <Section>
            <SectionBackButton text="Назад" />
            <S.Body>
                <S.InfoBlock>
                    <h2>Персональные данные</h2>
                    <S.ProfileImage>
                        <Avatar
                            src={newImage ? newImage : avatar}
                            alt="avatar"
                        />
                        <label>
                            <input type="file" onChange={imageHandler} />
                            <AiOutlineCamera size={30} />
                        </label>
                        <S.ConfirmButton
                            isSelected={photo}
                            onClick={fetchNewPhoto}
                        >
                            {loadingNewPhoto ? (
                                <LocalLoader height="30px" width="30px" />
                            ) : (
                                <MdDone />
                            )}
                        </S.ConfirmButton>
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
                            showYearDropdown
                            dateFormatCalendar="MMMM"
                            yearDropdownItemNumber={80}
                            scrollableYearDropdown
                            maxDate={new Date()}
                        />
                        <Button disabled={loading} onClick={updateUserInfo}>
                            {loading ? (
                                <LocalLoader height="35px" width="35px" />
                            ) : (
                                'Сохранить'
                            )}
                        </Button>
                    </S.Form>
                </S.InfoBlock>
                <S.PrivateInfo>
                    <h2>Данные авторизации</h2>
                    <S.Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            fetchNewPassword();
                        }}
                    >
                        <h3>Пароль</h3>

                        <Input
                            {...currentPass}
                            label="Текущий пароль"
                            type="password"
                        />
                        <Input
                            {...newPass}
                            label="Новый пароль"
                            type="password"
                        />
                        <Input
                            {...confimrNewPass}
                            label="Повторите пароль"
                            type="password"
                        />
                        <Button>
                            {loadingNewPassword ? (
                                <LocalLoader height="35px" width="35px" />
                            ) : (
                                'Изменить пароль'
                            )}
                        </Button>
                    </S.Form>

                    <S.Form>
                        <h3>Почта</h3>
                        <Input label="Введите новую почту" {...newEmail} />
                        <Button onClick={openEmailModal}>Изменить почту</Button>
                    </S.Form>

                    {isOpenEmailModal && (
                        <Modal isOpen={isOpenEmailModal}>
                            <S.ModalBody ref={ref}>
                                <h2>
                                    Нам необходимо убедиться что это
                                    действительно Вы.
                                </h2>
                                <S.EmailForm onSubmit={fetchNewEmail}>
                                    <Input
                                        autoFocus
                                        label="Введите действующую почту"
                                        {...emailLogin}
                                    />
                                    <Input
                                        label="Введите пароль"
                                        {...passwordLogin}
                                        type="password"
                                    />
                                    <Button>
                                        {loadingNewEmail ? (
                                            <LocalLoader
                                                height="35px"
                                                width="35px"
                                            />
                                        ) : (
                                            'Ok'
                                        )}
                                    </Button>
                                </S.EmailForm>
                            </S.ModalBody>
                        </Modal>
                    )}
                </S.PrivateInfo>
            </S.Body>
        </Section>
    );
};

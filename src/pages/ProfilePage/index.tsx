import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppointmentCard } from 'components/UI/AppointmentCard';
import { ECard } from 'components/UI/ECard';
import { ReactComponent as Results } from 'assets/img/ECards-icons/results.svg';
import { ReactComponent as Info } from 'assets/img/ECards-icons/info.svg';
import { ReactComponent as AddInfo } from 'assets/img/ECards-icons/addInfo.svg';
import { ReactComponent as History } from 'assets/img/ECards-icons/history.svg';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import { LocalLoader } from 'components/UI/LocalLoader';

import * as S from './style';

export const ProfilePage: FC = () => {
    const { appointments = [], loading } = useAppSelector(
        (state) => state.appointments
    );
    const { removeAppointment } = useActions();

    const admissionsArr =
        appointments.length && appointments.length > 2
            ? appointments
                  .slice(0, 2)
                  .map((item) => (
                      <AppointmentCard
                          key={item.id}
                          removeAppointment={removeAppointment}
                          {...item}
                          loading={loading}
                      />
                  ))
            : appointments.map((item) => (
                  <AppointmentCard
                      removeAppointment={removeAppointment}
                      key={item.id}
                      {...item}
                      loading={loading}
                  />
              ));

    let restAdmissions = '';

    if (appointments.length - 2 < 5) {
        restAdmissions = appointments.length - 2 === 1 ? ' запись' : ' записи';
    } else {
        restAdmissions = ' записей';
    }

    const showMoreAppointments =
        appointments.length > 2 ? (
            <>
                <span>
                    Еще {appointments.length - 2}
                    {restAdmissions}
                </span>
                <Link to="/appointments">Подборнее</Link>
            </>
        ) : null;

    const appointmentList =
        loading && !appointments.length ? (
            <div style={{ margin: '0 auto' }}>
                <LocalLoader width="50px" height="50px" />
            </div>
        ) : (
            admissionsArr
        );

    return (
        <S.AppointemntPage>
            <S.CardsList>
                {appointmentList}
                {appointments.length - 2 ? (
                    <S.ShowMoreBlock>{showMoreAppointments}</S.ShowMoreBlock>
                ) : null}
                {!appointments.length && !loading && (
                    <S.ActiveAppointments>
                        У вас нет активных записей
                    </S.ActiveAppointments>
                )}
            </S.CardsList>
            <S.PatientInfo>
                <h3>Электронная карта</h3>
                <S.ECards>
                    <ECard icon={<Info />} title="Информация о пациенте">
                        <ul>
                            <li>Ваши личные данные</li>
                            <li>Рекомендации врачей</li>
                            <li>История болезней</li>
                        </ul>
                    </ECard>
                    <ECard icon={<Results />} title="Результаты анализов">
                        <p>Вы можете узнать здесь результаты своих анализов</p>
                    </ECard>
                    <ECard icon={<AddInfo />} title="Добавить  информацию">
                        <p>
                            Добавляйте в свою электронную медицинскую карту
                            новые данные
                        </p>
                    </ECard>
                    <ECard icon={<History />} title="История приемов">
                        <p>
                            Вся информация о полученных услугах за все время
                            хранится здесь
                        </p>
                    </ECard>
                </S.ECards>
            </S.PatientInfo>
        </S.AppointemntPage>
    );
};

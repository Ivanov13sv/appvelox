import { FormEvent, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { IDoctor } from 'types/doctors';
import { Select } from 'components/UI/Select';
import { ISelectItem } from 'types/selectItem';
import { Button } from 'components/UI/Button';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import {
    removeDuplicateOptions,
    filterReservedDates,
    filterDoctorsBySpeciality,
} from 'utils';
import { IAppointment } from 'types/appointment';
import { Loader } from 'components/UI/LocalLoader/style';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import subDays from 'date-fns/subDays';
import { Datepicker } from 'components/UI/Datepicker';
import { useClickOutside } from 'hooks/useClickOutside';
import {  fetchReservedDates } from '../../firebase';
import * as S from './style';

export const MakeAnAppointment = () => {
    const [date, setDate] = useState<any>(null);
    const {
        authInfo: { id: userId },
    } = useAppSelector((state) => state.authInfo);

    const { doctors } = useAppSelector((state) => state.doctors);
    const { loading } = useAppSelector((state) => state.appointments);
    const { closeModal, addAppointment } = useActions();
    const [selectedSpeciality, setSelectedSpeciality] = useState<ISelectItem>({
        id: '',
        option: '',
    });
    const [selectedDoctor, setSelectedDoctor] = useState<ISelectItem>({
        id: '',
        option: '',
    });

    const [reservedDates, setReservedDates] = useState<any>();

    const fetchDates = async () => {
        const result = await fetchReservedDates(selectedDoctor);
        setReservedDates(result);
    };

    const postNewAppointment = () => {
        const doctor = doctors.find(
            (item) => item.id === selectedDoctor.id
        ) as IDoctor;
        const id = Date.now();
        const userAppointment: IAppointment = {
            id: `${id}`,
            doctorId: doctor.id,
            name: doctor.name,
            speciality: doctor.speciality,
            address: doctor.address,
            date: new Date(date).getTime(),
            hospital: doctor.hospital,
            photo: doctor.photo,
        };

        const doctorAppointment = {
            id: `${id}`,
            date: new Date(date).getTime(),
        };
        if (userId) {
            addAppointment({
                selectedDoctorId: selectedDoctor.id,
                currentUserId: userId,
                doctorAppointment,
                userAppointment,
            });
        }
    };

    const setNewAppointment = async (e: FormEvent) => {
        e.preventDefault();
        postNewAppointment();
    };

    useEffect(() => {
        setSelectedDoctor({ id: '', option: '' });
        setReservedDates([]);
    }, [selectedSpeciality.id]);

    useEffect(() => {
        fetchDates();
        //eslint-disable-next-line
    }, [selectedDoctor]);

    const ref = useClickOutside(() => {
        closeModal();
    });

    return (
        <S.Wrapper ref={ref}>
            <S.Title>Запись на приём</S.Title>
            <S.Form onSubmit={setNewAppointment}>
                <Select
                    options={removeDuplicateOptions(
                        doctors,
                        'speciality',
                        'speciality'
                    )}
                    placeholder="Выберите направление"
                    selected={selectedSpeciality}
                    setSelected={setSelectedSpeciality}
                />
                <Select
                    isDisabled={!selectedSpeciality.id}
                    options={filterDoctorsBySpeciality(
                        doctors,
                        'speciality',
                        'name',
                        selectedSpeciality.option
                    )}
                    placeholder="Выберите специалиста"
                    selected={selectedDoctor}
                    setSelected={setSelectedDoctor}
                />

                <Datepicker
                    placeholderText="Выберите дату и время"
                    selected={date}
                    onChange={setDate}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={60}
                    timeCaption="Время"
                    dateFormat="d MMMM в HH:mm"
                    minDate={subDays(new Date(), 0)}
                    filterTime={(date) =>
                        filterReservedDates(reservedDates, date)
                    }
                    disabled={!selectedDoctor.option}
                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    shouldCloseOnSelect={true}
                    filterDate={(date: Date) => {
                        return !reservedDates.includes(date.getTime());
                    }}
                />

                <Button disabled={!date || loading}>
                    {loading ? (
                        <Loader width="30px" height="30px" />
                    ) : (
                        'Записаться'
                    )}
                </Button>
            </S.Form>
        </S.Wrapper>
    );
};

import { FC, MouseEvent } from 'react';
import { Section } from 'components/Section';
import { useAppSelector } from 'hooks/useAppSelector';
import styled, { css } from 'styled-components';
import { INotificationType } from 'types/notification';
import { getFormateDateWithTime } from 'utils/formateDate';
import { BsAppIndicator, BsTrash } from 'react-icons/bs';
import { Tooltip } from 'components/UI/Tooltip';
import { useActions } from 'hooks/useActions';
import { useState } from 'react';
import { IActivity } from 'types/activity';
import { ConfirmButtons } from 'components/UI/ConfirmButtons';

import *  as S from './style'


export const UserActivityPage = () => {
    const { activities, loading } = useAppSelector(
        (state) => state.userActivity
    );
    const { clearActivityStory, checkedAllActivities } = useActions();
    const activitiesArr = activities.map((item) => (
        <Activity key={item.id} isLoading={loading} {...item} />
    ));
    return (
        <Section>
            <S.ListControllButtons>
                <Tooltip label="Очистить историю" labelSide="top">
                    <S.DeleteAll onClick={clearActivityStory} />
                </Tooltip>

                <Tooltip label="Отметить как прочитанное" labelSide="right">
                    <S.ToggleAll onClick={checkedAllActivities} />
                </Tooltip>
            </S.ListControllButtons>
            <S.ActivityList>{activitiesArr}</S.ActivityList>
        </Section>
    );
};


interface IActivityProps extends IActivity {
    isLoading: boolean;
}

const Activity: FC<IActivityProps> = ({
    checked,
    date,
    id,
    message,
    type,
    isLoading,
}) => {
    const [confirmModal, setConfirmModal] = useState(false);
    const { setActivityChecked, setActivityUnchecked, removeActivity } =
        useActions();

    const removeHandler = (e: MouseEvent<SVGAElement>) => {
        e.stopPropagation();
        removeActivity(id);
    };
    const toggleActivityHandler = (e: MouseEvent<SVGElement>) => {
        e.stopPropagation();
        setActivityUnchecked(id);
    };
    return (
        <S.ActivityItem
            type={type}
            key={id}
            onClick={(e) => {
                e.stopPropagation();
                setActivityChecked(id);
            }}
            checked={checked}
        >
            <div>
                <span className="date">{getFormateDateWithTime(date)}</span>
                <p className="message">{message}</p>
            </div>
            {!checked && <div className="status">Новое!</div>}
            <div className="controllers">
                {confirmModal ? (
                    <ConfirmButtons
                        loading={isLoading}
                        callback={removeHandler}
                        closeModal={() => setConfirmModal(false)}
                    ></ConfirmButtons>
                ) : (
                    <>
                        <Tooltip
                            label="Отметить как непрочитанное"
                            labelSide="left"
                        >
                            <BsAppIndicator onClick={toggleActivityHandler} />
                        </Tooltip>

                        <Tooltip label="Удалить" labelSide="bottom">
                            <BsTrash
                                onClick={(e) => {
                                    setConfirmModal(true);
                                }}
                            />
                        </Tooltip>
                    </>
                )}
            </div>
        </S.ActivityItem>
    );
};

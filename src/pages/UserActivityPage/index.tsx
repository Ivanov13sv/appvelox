import { FC, MouseEvent, useMemo } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { getFormateDateWithTime } from 'utils/formateDate';
import { BsAppIndicator, BsTrash } from 'react-icons/bs';
import { Tooltip } from 'components/UI/Tooltip';
import { useActions } from 'hooks/useActions';
import { useState } from 'react';
import { IActivity } from 'types/activity';
import { ConfirmButtons } from 'components/UI/ConfirmButtons';
import { LocalLoader } from 'components/UI/LocalLoader';

import * as S from './style';

export const UserActivityPage = () => {
    const { activities, loading } = useAppSelector(
        (state) => state.userActivity
    );
    const [confirmClearStory, setConfirmClearStory] = useState(false);

    const { clearActivityStory, checkedAllActivities } = useActions();

    const handleClearStory = async () => {
        await clearActivityStory();
        setConfirmClearStory(false);
    };

    const activitiesArr = activities.map((item) => (
        <Activity key={item.id} isLoading={loading} {...item} />
    ));

    const controllButtons = confirmClearStory ? (
        <ConfirmButtons
            loading={loading}
            callback={handleClearStory}
            closeModal={() => setConfirmClearStory(false)}
        />
    ) : (
        <>
            <Tooltip label="Очистить историю" labelSide="top">
                <S.DeleteAll onClick={() => setConfirmClearStory(true)} />
            </Tooltip>
            {loading ? (
                <LocalLoader width="35px" height="35px" />
            ) : (
                <Tooltip label="Отметить как прочитанное" labelSide="right">
                    <S.ToggleAll onClick={checkedAllActivities} />
                </Tooltip>
            )}
        </>
    );

    return (
        <S.ActivitySection>
            <S.ListControllButtons>{controllButtons}</S.ListControllButtons>

            <S.ActivityList>
                {!loading && !activitiesArr.length ? (
                    <h2>Ваша история пуста</h2>
                ) : (
                    activitiesArr
                )}
            </S.ActivityList>
        </S.ActivitySection>
    );
};

// Activity item

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

    const removeHandler = (e: MouseEvent) => {
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
                    />
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

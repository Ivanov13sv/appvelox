import { getFormateDateWithTime } from 'utils';
import { IStoryItem } from 'types/storyItem';
import { FC } from 'react';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { LocalLoader } from 'components/UI/LocalLoader';
import { ShowMore, StoryItem, Wrapper } from './style';

interface INotificationStory {
    story: IStoryItem[];
}

export const NotificationStory: FC<INotificationStory> = ({ story }) => {
    const { setActivityChecked } = useActions();
    const { loading } = useAppSelector((state) => state.userActivity);


    const storyItems = story
        .slice(-3)
        .reverse()
        .map((item: IStoryItem) => (
            <StoryItem
                onMouseEnter={() => setActivityChecked(item.id)}
                key={item.id}
                type={item.type}
                isChecked={item.checked}
            >
                <div className="date">{getFormateDateWithTime(item.date)}</div>
                <div className="message">{item.message}</div>
            </StoryItem>
        ));

    return (
        <Wrapper>
            {!loading && !story.length ? (
                <h3>Ваша история пуста</h3>
            ) : (
                <h3>Ваша история</h3>
            )}
            {loading && !story.length ? (
                <LocalLoader width="35px" height="35px" />
            ) : (
                storyItems
            )}
            {story.length > 1 && (
                <ShowMore to="userActivity">Подробнее</ShowMore>
            )}
        </Wrapper>
    );
};

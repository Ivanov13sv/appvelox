import { INotificationType } from './notification';

export interface IStoryItem {
    id: number;
    message: string;
    type: INotificationType;
    date: number;
    checked: boolean;
}

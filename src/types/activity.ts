import { INotificationType } from './notification';

export interface IActivity {
    id: number;
    type: INotificationType;
    date: number;
    message: string;
    checked: boolean;
}

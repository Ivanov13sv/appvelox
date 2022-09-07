import { INotificationType } from './notification';

export interface IActivity {
    id: number;
    message: string;
    type: INotificationType;
    date: number;
    checked: boolean;
}

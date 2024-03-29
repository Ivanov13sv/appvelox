export interface IUser {
    firstName?: string;
    lastName?: string;
    patronymic?: string;
    email?: string;
    phone?: string;
    password?: string;
    dOb?: Date | null | number;
    gender?: string;
    registrationAddress?: string;
    residentialAddress?: string;
    representativeInfo?: IUserRepresentative;
}

export interface IUserRepresentative {
    firstName?: string;
    lastName?: string;
    patronymic?: string;
    phone?: string;
}

export interface IUserState {
    user: IUser;
    loading: boolean;
    error: null | string;
}

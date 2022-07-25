export interface IIUser {
	firstName?: string;
	lastName?: string;
	patronymic?: string;
	email?: string;
	phone?: string;
	password?: string;
	dOb?: string;
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

export const checkPasswordMatch = (passOne: string, passTwo: string): boolean => {
    if (passOne && passTwo){
       return passOne === passTwo ? true : false;
    }
	return false;
};

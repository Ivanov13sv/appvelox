export const getFormateDate = (date: number) => {
    return new Date(date).toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
    });
};
export const getFormateDateWithTime = (date: number) => {
    return new Date(date).toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
};

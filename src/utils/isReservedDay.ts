
export const isReservedDay = (appointmentsArr: Date[], value: Date) => {
    return appointmentsArr.some(
        (item) =>
            new Date(item).getMonth() === value.getMonth() &&
            new Date(item).getDate() === value.getDate() &&
            new Date(item).getFullYear() === value.getFullYear()
    );
};

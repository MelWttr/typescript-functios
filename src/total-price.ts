interface Params {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
}


export const totalPrice = ({ price, discount, isInstallment, months }: Params): number => {
    if (!isInstallment) {
        return price;
    }
    return (price - price * discount / 100) / months;
};
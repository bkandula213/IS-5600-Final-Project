import { instance } from '../../api';
import { PATH } from '../../common';

import { InitialStateCartType } from './cart-reducer';

export const cartPageAPI = {
    createOrder({ contactDetails, totalSum, productsCartList }: InitialStateCartType) {
        return instance.post<any>(PATH.CART_PAGE, {
            contactDetails,
            totalSum,
            productsCartList,
        });
    },
};

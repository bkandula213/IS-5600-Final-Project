import { instance } from '../../api';
import { PATH } from '../../common';

import { ProductType } from './products-reducer';

export const productsPageAPI = {
    getProducts() {
        return instance.get<Array<ProductType>>(PATH.GET_PRODUCTS);
    },
};

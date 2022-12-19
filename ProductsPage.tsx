import React, { ReactElement, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../common';

import { ProductItem } from './productItem';
import { getProducts } from './products-reducer';
import styles from './ProductsPage.module.css';

export const ProductsPage = (): ReactElement => {
    const dispatch = useAppDispatch();

    const products = useAppSelector(state => state.productsPage.products);
    const appStatus = useAppSelector(state => state.app.appStatus);

    useEffect(() => {
        dispatch(getProducts({}));
    }, [dispatch]);

    return (
        <div className={styles.productsPageContainer}>
            <h3>SHOP NOW</h3>
            <div className={styles.productsContainer}>
                {products.map(
                    (product): ReactElement => (
                        <ProductItem
                            key={product.productId}
                            product={product}
                            disabled={appStatus === 'loading'}
                        />
                    ),
                )}
            </div>
        </div>
    );
};

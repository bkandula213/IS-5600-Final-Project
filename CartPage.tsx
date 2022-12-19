import React, { ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import { PATH, useAppSelector } from '../../common';

import { CartItem } from './cartItem';
import styles from './CartPage.module.css';
import { ContactDetails } from './contactDetails';

export const CartPage = (): ReactElement => {
    const navigate = useNavigate();

    const totalSum = useAppSelector(state => state.cartPage.totalSum);
    const appStatus = useAppSelector(state => state.app.appStatus);
    const productsAtCart = useAppSelector(state => state.cartPage.productsCartList);

    const disabled = appStatus === 'loading';
    const disabledOrderClick = disabled || totalSum === 0;

    const onStartShoppingClickHandler = (): void => {
        navigate(PATH.PRODUCT_PAGE);
    };

    return (
        <div className={styles.cartContainer}>
            <div>
                {productsAtCart.length ? (
                    <div>
                        {productsAtCart.map(product => {
                            return (
                                <CartItem
                                    key={product.productId}
                                    product={product}
                                    disabled={disabled}
                                />
                            );
                        })}

                        <div className={styles.totalSumBlock}>
                            <h4>Total: {totalSum} $</h4>
                            <Button
                                disabled={disabled}
                                style={{ color: '#fff' }}
                                variant="contained"
                                onClick={onStartShoppingClickHandler}
                            >
                                BACK TO SHOPPING
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.totalSumBlock}>
                        <h4>The cart is empty</h4>
                        <Button
                            disabled={disabled}
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={onStartShoppingClickHandler}
                        >
                            SHOP NOW
                        </Button>
                    </div>
                )}
            </div>

            <ContactDetails disabled={disabledOrderClick} />
        </div>
    );
};

import React, { memo, ReactElement } from 'react';

import { Button, Paper } from '@material-ui/core';

import { useAppDispatch } from '../../../common';
import {
    decreaseQuantity,
    deleteProductFromCart,
    increaseQuantity,
    ProductCartType,
} from '../cart-reducer';

import styles from './CartItem.module.css';

type PropsType = {
    product: ProductCartType;
    disabled: boolean;
};

const buttonStyles = {
    maxWidth: '35px',
    maxHeight: '35px',
    minWidth: '35px',
    minHeight: '35px',
    color: '#fff',
    fontWeight: '900',
};

export const CartItem = memo(({ product, disabled }: PropsType): ReactElement => {
    const dispatch = useAppDispatch();

    const { productId, imgSrc, productName, pricePerUnit, quantity }: ProductCartType =
        product;

    const onIncreaseQuantityClickHandler = (): void => {
        dispatch(increaseQuantity({ productId }));
    };

    const onDecreaseItemClickHandler = (): void => {
        if (quantity === 1) {
            dispatch(deleteProductFromCart({ productId }));
        } else {
            dispatch(decreaseQuantity({ productId }));
        }
    };

    return (
        <Paper elevation={3}>
            <div className={styles.cartItemContainer}>
                <img alt="product" src={imgSrc} className={styles.img} />
                <div className={styles.itemQuantityContainer}>{productName}</div>
                <div className={styles.itemQuantityContainer}>
                    <Button
                        disabled={disabled}
                        variant="contained"
                        onClick={onDecreaseItemClickHandler}
                        style={buttonStyles}
                    >
                        -
                    </Button>
                    <div className={styles.itemQuantity}>{quantity}</div>
                    <Button
                        variant="contained"
                        onClick={onIncreaseQuantityClickHandler}
                        style={buttonStyles}
                        disabled={pricePerUnit === 0 || disabled}
                    >
                        +
                    </Button>
                </div>
                <div className={styles.priceBlock}>{pricePerUnit} $</div>
            </div>
        </Paper>
    );
});

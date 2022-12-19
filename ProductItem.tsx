import React, { ReactElement } from 'react';

import { Button, Paper } from '@material-ui/core';

import { useAppDispatch } from '../../../common';
import { addProductToCart } from '../../cartPage';
import { ProductType } from '../products-reducer';

import styles from './ProductItem.module.css';

type PropsType = {
    product: ProductType;
    disabled: boolean;
};

export const ProductItem = ({ product, disabled }: PropsType): ReactElement => {
    const dispatch = useAppDispatch();

    const { imgSrc, productDescription, productName, pricePerUnit } = product;

    const onAddToCardClickHandler = (): void => {
        dispatch(addProductToCart({ product }));
    };

    return (
        <Paper elevation={3} style={{ marginBottom: '30px' }}>
            <div className={styles.shoppingItemContainer}>
                <img alt="product" src={imgSrc} className={styles.img} />
                <h4 className={styles.title}>{productName}</h4>
                <div className={styles.text}>{productDescription}</div>
                <div className={styles.text}>
                    PRICE: <b>{pricePerUnit}$</b>
                </div>
                <Button
                    disabled={disabled}
                    variant="contained"
                    style={{ width: '320px', color: '#fff' }}
                    onClick={onAddToCardClickHandler}
                >
                    Add to Cart
                </Button>
            </div>
        </Paper>
    );
};

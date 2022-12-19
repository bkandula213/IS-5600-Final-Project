import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReduxStoreProviderDecorator } from '../../../app/ReduxStoreProviderDecorator';
import cakeImg from '../../../common/assets/image/cake6.png';
import { ProductCartType } from '../cart-reducer';

import { CartItem } from './CartItem';

export default {
    title: 'Shop/Cart_Page/CartItem',
    component: CartItem,
    decorators: [ReduxStoreProviderDecorator],
    args: {
        onAddItemClickHandler: action('one more item added'),
    },
} as ComponentMeta<typeof CartItem>;

const baseArgs = {
    onAddItemClickHandler: action('one more item added'),
    onDeleteItemClickHandler: action('one more item added'),
};

const Template: ComponentStory<typeof CartItem> = args => <CartItem {...args} />;

const productCart: ProductCartType = {
    productId: '41',
    imgSrc: cakeImg,
    productName: 'Best Product',
    quantity: 5,
    pricePerUnit: 70,
};

export const CartItemBaseExample = Template.bind({});
CartItemBaseExample.args = {
    ...baseArgs,
    product: productCart,
};

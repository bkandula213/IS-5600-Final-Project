import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import placeholder from '../../../common/assets/image/cake6.png';
import { ProductType } from '../products-reducer';

import { ProductItem } from './ProductItem';

export default {
    title: 'Example/Product_Page/ProductItem_Component',
    component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = args => <ProductItem {...args} />;

export const ProductItemBaseExample = Template.bind({});

const product: ProductType = {
    imgSrc: placeholder,
    productDescription: "That's the best product ever!",
    productId: '8',
    productName: 'PRODUCT',
    pricePerUnit: 85,
};

ProductItemBaseExample.args = {
    product,
    disabled: false,
};

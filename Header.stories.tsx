import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReduxStoreProviderDecorator } from '../../../app/ReduxStoreProviderDecorator';

import { Header } from './Header';

export default {
    title: 'Shop/Common/Header',
    component: Header,
    decorators: [ReduxStoreProviderDecorator],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const HeaderBaseExample = Template.bind({});
HeaderBaseExample.args = {
    demo: true,
};

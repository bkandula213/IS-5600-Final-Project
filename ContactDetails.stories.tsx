import React from 'react';

import withFormik from '@bbbtech/storybook-formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReduxStoreProviderDecorator } from '../../../app/ReduxStoreProviderDecorator';

import { ContactDetails, FormSchema } from './ContactDetails';

export default {
    title: 'Shop/Cart_Page/Contact_Details',
    component: ContactDetails,
    decorators: [ReduxStoreProviderDecorator, withFormik],
    parameters: {
        formik: {
            initialValues: {
                firstName: '',
                surname: '',
                address: '',
                phone: '',
            },
            validationSchema: FormSchema,
            onSubmit: (v: any) => console.log('I want to log these... ', v),
        },
    },
} as ComponentMeta<typeof ContactDetails>;

const Template: ComponentStory<typeof ContactDetails> = args => (
    <ContactDetails {...args} />
);

export const ContactDetailsBaseExample = Template.bind({});
ContactDetailsBaseExample.args = {
    disabled: false,
};

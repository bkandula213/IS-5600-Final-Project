import React, { ReactElement } from 'react';

import { TextField } from '@material-ui/core';
// eslint-disable-next-line import/no-unresolved
import { FieldInputProps } from 'formik/dist/types';

import { ErrorMessage } from '../errorMessage/ErrorMessage';

type PropsType = {
    placeholder: string;
    value: string;
    errorMessage?: string;
    isTouched?: boolean;
    getFieldProps: (value: string) => FieldInputProps<any>;
};

const textFieldStyles = { marginBottom: '10px', width: '280px' };

export const OrderInput = ({
    placeholder,
    value,
    errorMessage,
    isTouched,
    getFieldProps,
}: PropsType): ReactElement => {
    return (
        <>
            <TextField
                style={textFieldStyles}
                label={placeholder}
                {...getFieldProps(value)}
            />
            <ErrorMessage errorMessage={errorMessage} isTouched={isTouched} />
        </>
    );
};

import React, { ReactElement } from 'react';

import styles from './ErrorMessage.module.css';

type PropsType = {
    errorMessage?: string;
    isTouched?: boolean;
};

export const ErrorMessage = ({ errorMessage, isTouched }: PropsType): ReactElement => {
    return (
        <div className={styles.error}>
            {isTouched && errorMessage ? errorMessage : ''}
        </div>
    );
};

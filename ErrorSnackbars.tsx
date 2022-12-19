import * as React from 'react';
import { ReactElement } from 'react';

import { Snackbar, Stack, AlertProps } from '@material-ui/core';
import MuiAlert from '@material-ui/core/Alert';

import { setAppError } from '../../../app';
import { useAppDispatch, useAppSelector } from '../../hooks';

const DELAY = 6000;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackbars = (): ReactElement => {
    const appError = useAppSelector(state => state.app.appError);
    const dispatch = useAppDispatch();

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppError({ appError: null }));
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                open={appError !== null}
                autoHideDuration={DELAY}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {appError}
                </Alert>
            </Snackbar>
        </Stack>
    );
};

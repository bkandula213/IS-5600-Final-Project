import React, { memo, ReactElement } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Slide, Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

import ordered from '../../assets/image/ordered.png';

import styles from './Modal.module.css';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type PropsType = {
    setOpen: (open: boolean) => void;
    open: boolean;
};

export const Modal = memo(({ setOpen, open }: PropsType): ReactElement => {
    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                // @ts-ignore
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <img className={styles.img} alt="order" src={ordered} />
                <DialogTitle style={{ textAlign: 'center' }}>
                    Your order has been sent
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

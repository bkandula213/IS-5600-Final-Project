import React, { ReactElement } from 'react';

import { AppBar, Box, Toolbar, Paper, IconButton } from '@material-ui/core';
import { ShoppingBasketSharp } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../enums';
import { useAppSelector } from '../../hooks';

const paperStyles = {
    height: '30px',
    textAlign: 'center',
    minWidth: '80px',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginRight: '20px',
    paddingRight: '5px',
};
const toolbarStyles = {
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: '#161616',
    color: '#c29f79',
};

export const Header = (): ReactElement => {
    const navigate = useNavigate();
    const totalSum = useAppSelector(state => state.cartPage.totalSum);

    const onCartClickHandler = (): void => {
        navigate(PATH.CART_PAGE);
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar style={toolbarStyles}>
                    <Paper
                        // @ts-ignore
                        style={paperStyles}
                    >
                        {totalSum || ''}
                    </Paper>
                    <IconButton color="inherit" onClick={onCartClickHandler}>
                        <ShoppingBasketSharp />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

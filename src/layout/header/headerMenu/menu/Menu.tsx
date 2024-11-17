import React from 'react';
import {S} from '../HeaderMenu_Styles'

export const Menu = () => {
    return (
        <S.StyledMenu>
            <S.MenuItem>
                <S.Link href="#">Home</S.Link>
            </S.MenuItem>
            <S.MenuItem>
                <S.Link href="#">About</S.Link>
            </S.MenuItem>
            <S.MenuItem>
                <S.Link href="#">Services</S.Link>
            </S.MenuItem>
        </S.StyledMenu>
    );
};


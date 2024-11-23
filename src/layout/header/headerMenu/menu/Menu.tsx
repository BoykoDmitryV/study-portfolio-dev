import React from 'react';
import {S} from '../HeaderMenu_Styles'

export const Menu = () => {
    return (
        <S.StyledMenu>
            <S.MenuItem>
                <S.NavLink
                    to="home"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                >Home</S.NavLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.NavLink
                    to="about"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                >About</S.NavLink>
            </S.MenuItem>
            <S.MenuItem>
                <S.NavLink
                    to="services"
                    smooth={true}
                    activeClass="active"
                    spy={true}
                >Services</S.NavLink>
            </S.MenuItem>
        </S.StyledMenu>
    );
};


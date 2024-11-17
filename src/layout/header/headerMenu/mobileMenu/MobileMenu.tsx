import React from "react";
import {Logo} from "../../../../components/logo/Logo";
import {Menu} from "../menu/Menu";
import {ButtonMenu} from "../menu/ButtonMenu";
import {S} from './../HeaderMenu_Styles'

export const MobileMenu: React.FC = () => {
    return (
        <S.MobileMenu aria-modal>
            <Logo/>
            <S.BurgerButton aria-haspopup isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu/>
                <ButtonMenu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

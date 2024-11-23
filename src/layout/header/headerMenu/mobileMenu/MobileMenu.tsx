import React, {useState} from "react";
import {Logo} from "../../../../components/logo/Logo";
import {Menu} from "../menu/Menu";
import {ButtonMenu} from "../menu/ButtonMenu";
import {S} from './../HeaderMenu_Styles'

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}
    return (
        <S.MobileMenu aria-modal>
            <S.BurgerButton aria-haspopup isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () =>{setMenuIsOpen(false)}}>
                <Logo/>
                <Menu/>
                <ButtonMenu/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

import React from "react";
import {Logo} from "../../../../components/logo/Logo";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Menu} from "../menu/Menu";
import {ButtonMenu} from "../menu/ButtonMenu";
import {S} from './../HeaderMenu_Styles'

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <Menu/>
                <ButtonMenu/>
            </FlexWrapper>
        </S.DesktopMenu>
    );
};







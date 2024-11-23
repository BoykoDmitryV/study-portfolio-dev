import React from 'react';
import {Information} from "../../../../components/Information";
import {S} from './BoxEmail_Styles'
import {Icon} from "../../../../components/icon/Icon";

export const BoxEmail = () => {
    return (
        <S.StyledBoxEmail>
                <Information title={"Your name:"}/>
                <S.Field aria-label="Your name"/>
                <Information title={"Your email  address:"}/>
                <S.Field aria-label="Your email  address"/>
                <Information title={"Tell about the project:"}/>
                <S.Field aria-label="Tell about the project"/>
                    <S.SendButton>Send
                        <Icon width={"40"}
                              height={"40"}
                              viewBox={"0 0 40 40"}
                              iconId={"arrow-right"}
                        />
                    </S.SendButton>
        </S.StyledBoxEmail>
    );
};


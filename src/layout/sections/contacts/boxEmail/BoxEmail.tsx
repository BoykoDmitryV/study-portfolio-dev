import React from 'react';
import {Information} from "../../../../components/Information";
import {ButtonArrow} from "../../../../components/buttonArrow/ButtonArrow";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from './BoxEmail_Styles'

export const BoxEmail = () => {
    return (
        <S.StyledBoxEmail>
                <Information title={"Your name:"}/>
                <S.Field aria-label="Your name"/>
                <Information title={"Your email  address:"}/>
                <S.Field aria-label="Your email  address"/>
                <Information title={"Tell about the project:"}/>
                <S.Field aria-label="Tell about the project"/>
                <S.BoxButton>
                    <FlexWrapper align={"center"}>
                        <S.FooterButton>Send</S.FooterButton>
                        <ButtonArrow arrowId={"arrow-right"} aria-label="Next" width={"30px"} height={"30px"}/>
                    </FlexWrapper>
                </S.BoxButton>
        </S.StyledBoxEmail>
    );
};


import React from 'react';
import {Information} from "../../../../components/Information";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from './boxInformation_Styles'

export const BoxInformation = () => {
    return (
        <S.BoxInformation>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <Information title={"Satisfaction Clients"} text={"100 %"}/>
                <Information title={"Clients On Worldwide"} text={"+ 80"}/>
                <Information title={"Projects Done"} text={"743"}/>
            </FlexWrapper>
        </S.BoxInformation>
    );
};

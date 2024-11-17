import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {S} from './Footer_Styles'

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={"center"}>
                    <span>
                  Created by <S.TextB>Zarror</S.TextB> | All Reserved!
                    </span>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

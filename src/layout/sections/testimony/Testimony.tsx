import React from 'react';
import {BoxContent} from "./boxContent/boxContent";
import {BoxInformation} from "./boxInformation/boxInformation";
import {Container} from "../../../components/Container";
import {S} from './Testimony_Styles'

export const Testimony: React.FC = () => {
    return (
        <S.Testimony id={"services"}>
            <Container>
                <S.TestimonyBox>
                    <BoxContent/>
                    <BoxInformation/>
                </S.TestimonyBox>
            </Container>
        </S.Testimony>
    );
};


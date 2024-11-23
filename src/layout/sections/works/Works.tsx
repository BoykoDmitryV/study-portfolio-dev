import React from 'react';
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'
import {WorksInfo} from "./worksInfo/WorksInfo";
import {WorksSpecialized} from "./worksSpecialized/WorksSpecialized";

export const Works: React.FC = () => {
    return (
        <S.Works id={"about"}>
            <Container>
                <S.WorksContainer>
                    <WorksInfo/>
                    <WorksSpecialized/>
                </S.WorksContainer>
            </Container>
        </S.Works>
    );
};
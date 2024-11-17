import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <S.IconsBox>
                    <Icon iconId={'figma'}/>
                    <Icon iconId={'html'}/>
                    <Icon iconId={'css'}/>
                    <Icon iconId={'sass'}/>
                    <Icon iconId={'react'}/>
                </S.IconsBox>
            </Container>
        </S.Skills>
    );
};

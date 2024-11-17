import React from 'react';
import {Work} from "../work/Work";
import {theme} from "../../../../styles/Theme";
import {S} from './WorksSpecialized_Styles'

export const WorksSpecialized: React.FC = () => {
    return (
        <S.BoxSpecialized>
            <S.SmallText>Developer and Designer, specialized in <br/> UI/UX and Web Developer</S.SmallText>
                <S.CardBox>
                    <Work
                        iconId={"computer"}
                        description={"Front End Developer"}/>
                    <Work
                        iconId={"paint"}
                        description={"UI/UX Designer"}
                        bgColor={theme.colors.grey}
                        textColor={theme.colors.secondaryBg}/>
                    <Work
                        iconId={"thunder"}
                        description={"Branding Designer"}
                        bgColor={theme.colors.grey}
                        textColor={theme.colors.secondaryBg}/>
                </S.CardBox>
        </S.BoxSpecialized>
    );
};

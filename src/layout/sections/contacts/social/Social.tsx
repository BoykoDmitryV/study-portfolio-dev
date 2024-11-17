import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from './Social_Styles'

export const Social: React.FC = () => {
    return (
        <S.Social>
            <S.SocialTitle>Let’s <br/> Connect</S.SocialTitle>
            <S.SocialIcons>
                <li><a href="#" aria-label="dribble"><Icon iconId={"dribble"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
                <li><a href="#" aria-label="upwork"><Icon iconId={"upwork"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
                <li><a href="#" aria-label="youtube"><Icon iconId={"youtube"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
                <li><a href="#" aria-label="linkedin"><Icon iconId={"linkedin"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
                <li><a href="#" aria-label="github"><Icon iconId={"github"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
            </S.SocialIcons>
        </S.Social>
    );
};

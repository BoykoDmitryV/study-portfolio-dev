import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from './Social_Styles'

export const Social: React.FC = () => {
    return (
        <S.Social>
            <S.SocialTitle>Let’s <br/> Connect</S.SocialTitle>
            <S.SocialIcons>
                <li><a href="https://dribbble.com/tags/incubator" aria-label="dribble" target="_blank" rel="noopener noreferrer"><Icon iconId={"dribble"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
                <li><a href="https://www.upwork.com/agencies/759069724823101440/" aria-label="upwork" target="_blank" rel="noopener noreferrer"><Icon iconId={"upwork"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
                <li><a href="https://www.youtube.com/c/ITINCUBATOR" aria-label="youtube" target="_blank" rel="noopener noreferrer"><Icon iconId={"youtube"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
                <li><a href="https://www.linkedin.com/school/it-incubator-io/" aria-label="linkedin" target="_blank" rel="noopener noreferrer"><Icon iconId={"linkedin"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
                <li><a href="https://github.com/it-incubator" aria-label="github" target="_blank" rel="noopener noreferrer"><Icon iconId={"github"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a></li>
            </S.SocialIcons>
        </S.Social>
    );
};
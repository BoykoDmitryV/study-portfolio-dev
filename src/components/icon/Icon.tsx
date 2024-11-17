import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type IconPropsType = {
    iconId: string
    width?:string
    height?:string
    viewBox?:string
}

export const Icon = (props: IconPropsType) => {
    return (
            <svg width={props.width || "100"} height={props.height || "100"} viewBox={props.viewBox || "0 0 100 100"}
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </svg>
    );
};

const StyledIcon = styled.a`
    //:hover {
    //    transform: translateY(-4px);
    //}
`
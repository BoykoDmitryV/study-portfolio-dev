import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

type InformationPropsType = {
    title: string
    text?: string
}

export const Information = (props: InformationPropsType) => {
    return (
        <StyledInformation>
                <InfoName>{props.title}</InfoName>
                <InfoStats>{props.text}</InfoStats>
        </StyledInformation>
    );
};

const StyledInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const InfoName = styled.h3`
    ${font({weight: 700, Fmax: 30, Fmin: 30, family: '"Playfair Display", sans-serif'})}
`

const InfoStats = styled.h3`
    ${font({weight: 700, Fmax: 50, Fmin: 50, family: '"Playfair Display", sans-serif', color: theme.colors.accent})}
`
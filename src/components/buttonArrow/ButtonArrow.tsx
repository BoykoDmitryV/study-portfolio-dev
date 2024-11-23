import React from 'react';
import styled from "styled-components";
import '../../styles/info.css'
import {Icon} from "../icon/Icon";

type ButtonArrowPropsType = {
    arrowId: string
    width?: string
    height?: string
    viewBox?: string
    style?: string
    disabled?: boolean
}

export const ButtonArrow = (props: ButtonArrowPropsType) => {
    return (
        <StyledButtonArrow disabled={props.disabled}>
            <Icon
                width={props.width || "40"}
                height={props.height || "40"}
                viewBox={props.viewBox || "0 0 40 40"}
                iconId={props.arrowId}
            />
        </StyledButtonArrow>
    );
};

const StyledButtonArrow = styled.button<{ disabled?: boolean }>`
    background: none;
    border: none;
    cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
    transition: opacity 0.3s ease;

    &:hover {
        opacity: ${({disabled}) => (disabled ? 0.5 : 0.8)};
    }
`;

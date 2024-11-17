import React from 'react';
import photo2 from '../../../../assets/images/photo-2.jpg'
import {ButtonArrow} from "../../../../components/buttonArrow/ButtonArrow";
import {S} from './boxContent_Styles'

export const BoxContent = () => {
    return (
        <S.BoxInformation>
            <S.Photo src={photo2} alt=""/>
            <S.BoxContainer>
                <S.BoxTitle>“</S.BoxTitle>
                <S.BoxP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent
                </S.BoxP>
                <S.BoxButton>
                        <ButtonArrow arrowId={"arrow-left"} aria-label="Back"/>
                        <ButtonArrow arrowId={"arrow-right"} aria-label="Next"/>
                </S.BoxButton>
            </S.BoxContainer>
        </S.BoxInformation>
    );
};

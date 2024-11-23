import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './boxContent_Styles'
import photo2 from '../../../../assets/images/photo-2.jpg'
import photo1 from '../../../../assets/images/photo-1.jpg'
import {ButtonArrow} from "../../../../components/buttonArrow/ButtonArrow";
import Tilt from 'react-parallax-tilt';

type InfoPropsType = {
    text: string;
    image: string;
}

const Info = (props: InfoPropsType) => {
    return (
        <S.BoxInformation>
            <Tilt>
                <S.Image src={props.image} alt="Info Image"/>
            </Tilt>
            <S.BoxContainer>
                <S.BoxTitle>“</S.BoxTitle>
                <S.BoxText>{props.text}</S.BoxText>
                <S.BoxButton>
                </S.BoxButton>
            </S.BoxContainer>
        </S.BoxInformation>
    )
}

const items = [
    <Info
        image={photo2}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent"}/>,
    <Info
        image={photo1}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. "}/>,
    <Info
        image={photo2}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,mattis tellus. Class aptent taciti sociosqu ad litora torquen"}/>
];
export const BoxContent = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleSlideChanged = (e: { item: number }) => {
        setCurrentIndex(e.item);
    };

    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex === items.length - 1;

    return (
        <S.BoxInformation>
            <AliceCarousel
                mouseTracking
                items={items}
                activeIndex={currentIndex}
                onSlideChanged={handleSlideChanged}
                renderPrevButton={() => {
                    return <ButtonArrow
                        arrowId={"arrow-left"}
                        aria-label="Back"
                        disabled={isAtStart}
                    />
                }}
                renderNextButton={() => {
                    return <ButtonArrow
                        arrowId={"arrow-right"}
                        aria-label="Next"
                        disabled={isAtEnd}
                    />
                }}
            />
        </S.BoxInformation>
    )
};

//поставить размеры для кнопок элис
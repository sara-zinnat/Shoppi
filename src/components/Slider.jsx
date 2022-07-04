import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import React, { useState } from 'react'

const Container = styled.div`
    weight: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    Overflow: hidden;

`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left"&& "10px"};
    right: ${props=> props.direction === "right"&& "10px"};
    margin: auto;
    cursor: pointer;
    opasity: 0.5;
    z-index: 2;

`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    trandform: translateX(0vx);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-item: center;
    background-color: #${props=>props.bg}
`;

const Image = styled.img`
    padding: 30px;
    height: 70%;
`;

const ImgContainer= styled.div`
    height: 100%;
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`

    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 550;
    letter-spacing: 3px;

`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`; 

const Slider = () => {
        const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {};
  
  return (
    <Container>
        <Arrow direction= "left" onClick = {()=>handleClick("left")}> 
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide bg= "ffc466">
            <ImgContainer>
                <Image src="  https://www.nicepng.com/png/full/8-88585_women-fashion-png-example-of-magazine-cover.png " />
            </ImgContainer>
            <InfoContainer>
                <Title>Summer SALE</Title>
                <Desc>Don't compromise on style!!Get 30% off on new arrivals</Desc>
                <Button> Show Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg = "f5fafd">
            <ImgContainer>
                <Image src="  https://www.nicepng.com/png/full/8-88585_women-fashion-png-example-of-magazine-cover.png " />
            </ImgContainer>
            <InfoContainer>
                <Title> Winter SALE</Title>
                <Desc>Don't compromise on style!!Get 30% off on new arrivals</Desc>
                <Button> Show Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="f5faf4">
            <ImgContainer>
                <Image src="  https://www.nicepng.com/png/full/8-88585_women-fashion-png-example-of-magazine-cover.png " />
            </ImgContainer>
            <InfoContainer>
                <Title> Popular</Title>
                <Desc>Don't compromise on style!!Get 30% off on new arrivals</Desc>
                <Button> Show Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction= "right" onClick = {()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
    background-color: #E1C4BD;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-item: center
    justify-content: space-between;

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid black;
    display: flex;
    align-item: center;
    margin-left: 25px;
    padding: 1px;
`;
const Input = styled.input`
    border: None;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;
const Right = styled.div`
    flex: 1;
`; 

const Navbar = () => {
  return (
    <Container>
        <Wrapper> 
            <Left>
                <Language>EN</Language>
                <SearchContainer> 
                    <Input/>
                    <Search/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Shoppie</Logo>
            </Center>
            <Right>right</Right> 
        </Wrapper>
    </Container>
  )
};

export default Navbar;
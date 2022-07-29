import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container = styled.div`
    height: 60px;
    background-color: #ffff9e;
    ${mobile({ height: "50px" })}
    
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-item: center
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid black;
    display: flex;
    align-item: center;
    margin-left: 10px;
    padding: 4px;
`;
const Input = styled.input`
    border: None;
    ${mobile({ width: "50px" })}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    padding: 2.5px;
    ${mobile({ fontSize: "24px" })}

`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}    
`; 

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper> 
            <Left>
                <Language>EN</Language>
                <SearchContainer> 
                    <Input placeholder = "Search"/>
                    <Search style = {{color:"gray", fontSize: 20}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Shoppie</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color = "primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right> 
        </Wrapper>
    </Container>
  )
};

export default Navbar;
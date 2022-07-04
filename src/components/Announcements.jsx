import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color: #c9f9de;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-sixe: 14px;
    font-weignt: 500;

`;
const Announcements = () => {
  return (
    <div>
        <Container>
            Super Deal! Free shippping over 50
        </Container>
    </div>
  )
}

export default Announcements
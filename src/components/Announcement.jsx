import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

const Announcement = () => {

    const Container = styled.div`
    
    background-color:teal;
    color:white;
    padding-top:10px;
    padding-bottom:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    ${mobile({ height: "50px" })}
`;

    const Wrapper = styled.div`
    
`;
    return (
        <Container>
            <Wrapper>
                Buy Now to get 50% off your first purchase!
            </Wrapper>
        </Container>
    )
}

export default Announcement
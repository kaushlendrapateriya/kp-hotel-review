import React from "react";
import styledComponents from "styled-components";

const HeaderWrapper = styledComponents.div`
    background-color: royalBlue;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Title = styledComponents.h1`
    pointer-events: none;
`;

const Header = () => (
    <HeaderWrapper>
        <Title>Hotel Review</Title>
    </HeaderWrapper>
);

export default Header;
import React from "react";
import styledComponents from "styled-components";

const HotelItemWrapper = styledComponents.div`
    display: flex;
    text-align: left;
    align-items: center;
    padding: 1%;
    background: lightGray;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 2%;
    text-decoration: none;
`;

const Title = styledComponents.h3`
    margin-left: 2%;
`;

const Thumbnail = styledComponents.img`
    border-radius: 5px;
`;

const HotelItem = ({ data }) => (
    <HotelItemWrapper>
        <Thumbnail src={data.Thumbnail} width={200} />
        <Title>{data.title}</Title>
    </HotelItemWrapper>
);

export default HotelItem;
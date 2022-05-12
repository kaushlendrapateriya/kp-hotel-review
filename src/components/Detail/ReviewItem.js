import React from "react";
import styledComponents from "styled-components";

const ReviewItemWrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
    background: lightGray;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 2%;
    text-decoration: none;
`;

const Title = styledComponents.h3`
    display: flex;
    justify-content: space-between;
    flex-basis: 70%;
`;

const Rating = styledComponents.span`
    font-weight: bold;
    text-align: right;
`;

const Description = styledComponents.div`
    text-align: left;
`;

const ReviewItem = ({ data }) => (
    <ReviewItemWrapper>
        <Title>
            {data.title}
            <Rating>{`Rating: ${data.rating}`}</Rating>
        </Title>
        <Description>
            {data.description}
        </Description>
    </ReviewItemWrapper>
);

export default ReviewItem;
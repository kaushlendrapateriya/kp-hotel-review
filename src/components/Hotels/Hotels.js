import React from "react";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { HotelsContext } from "../../context/HotelsContextProvider";
import SubHeader from "../Header/SubHeader";
import HotelItem from "./HotelItem";

const HotelItemsWrapper = styledComponents.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2% 5%;
`;

const HotelLink = styledComponents(Link)`
    color: black;
    text-decoration: none;
`;

const Alert = styledComponents.span`
    width: 100%;
    text-align: center;
`;

const Hotels = () => {
    const { hotels, loading, error, getHotelsRequest } = React.useContext(
        HotelsContext,
    );

    React.useEffect(() => {
        if (!hotels.length) {
            getHotelsRequest();
        }
    }, [getHotelsRequest, hotels]);

    return !loading && !error ? (
        <>
            <SubHeader title={'Hotels List'} />
            <HotelItemsWrapper>
                {hotels &&
                    hotels.map(hotel => (
                        <HotelLink key={hotel.id} to={`hotel/${hotel.id}`}>
                            <HotelItem data={hotel} />
                        </HotelLink>
                    ))}
            </HotelItemsWrapper>
        </>
    ) : (
        <Alert>{loading ? 'Loading...' : error}</Alert>
    );
};

export default Hotels;
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styledComponents from "styled-components";
import { HotelsContext } from "../../context/HotelsContextProvider";
import { ReviewsContext } from "../../context/ReviewsContextProvider";
import SubHeader from "../Header/SubHeader";
import ReviewItem from "./ReviewItem";

const ReviewsWrapper = styledComponents.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2% 5%;
`;

const Alert = styledComponents.span`
    width: 100%;
    text-align: center;
`;

const Detail = () => {
    let params = useParams();
    let navigate = useNavigate();
    
    const { hotel, getHotelRequest } = React.useContext(HotelsContext);
    const { loading, error, reviews, getReviewsRequest } = React.useContext(
        ReviewsContext,
    );
    
    React.useEffect(() => {
        getHotelRequest(params.id);
        if (!reviews.length > 0) {
            getReviewsRequest(params.id);
        }
    }, [getHotelRequest, getReviewsRequest, params.id, reviews.length]);

    return !loading && !error ? (
        <>
            {navigate && hotel && (
                <SubHeader 
                    goBack={() => navigate(-1)} 
                    title={hotel.title}
                    openForm={() => navigate(`/hotel/${params.id}/new`)}
                />
            )}
            <ReviewsWrapper>
                {reviews && 
                    reviews.map(review => <ReviewItem key={review.id} data={review} />)}
            </ReviewsWrapper>
        </>
    ) : (
        <>
            {navigate && hotel && (
                <SubHeader 
                    goBack={() => navigate(-1)}
                    title={hotel.title}
                    openForm={() => navigate(`/hotel/${params.id}/new`)}
                />
            )}
            <Alert>{loading ? 'Loading...' : error}</Alert>
        </>
    );
};

export default Detail;
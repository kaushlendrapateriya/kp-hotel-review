import React from "react";
import styledComponents from "styled-components";
import { ReviewsContext } from "../../context/ReviewsContextProvider";
import SubHeader from "../Header/SubHeader";
import FormInput from "./FormInput";
import Button from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";

const FormWrapper = styledComponents.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2% 0;
`;

const SubmitButton = styledComponents(Button)`
    background: blue;
    margin: 2% 0;
`;

const Form = () => {
    let navigate = useNavigate();
    let params = useParams();
    const { addReviewRequest } = React.useContext(ReviewsContext);
    const [title, setTitle] = React.useState();
    const [rating, setRating] = React.useState();
    const [description, setDescription] = React.useState();

    const handleOnSubmit = e => {
        e.preventDefault();
        addReviewRequest({
            title,
            rating,
            description,
            id: Math.floor(Math.random() * 100),
            hotelId: parseInt(params.id),
        });
        navigate(-1);
    };

    return (
        <>
            { navigate && (
                <SubHeader goBack={() => navigate(-1)} title={`Add Review`} />
            )}
            <FormWrapper>
                <form onSubmit={handleOnSubmit}>
                    <FormInput 
                        id='title'
                        label='Title'
                        placeholder='Insert Title' 
                        value={title}
                        handleOnChange={setTitle}
                    />
                    <FormInput 
                        id='rating'
                        label='Rating'
                        type='number'
                        placeholder='0'
                        max={5}
                        value={rating}
                        handleOnChange={setRating}
                    />
                    <FormInput 
                        id='description'
                        label='Description'
                        type='textarea'
                        placeholder='Your Rating Message Here...'
                        value={description}
                        handleOnChange={setDescription}
                    />
                    <SubmitButton>Add Review</SubmitButton>
                </form>
            </FormWrapper>
        </>
    );
};

export default Form;
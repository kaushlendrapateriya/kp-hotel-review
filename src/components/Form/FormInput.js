import React from "react";
import styledComponents from "styled-components";

const FormInputWrapper = styledComponents.div`
    display: flex;
    text-align: left;
    flex-direction: column;
    margin-bottom: 2%;
`;

const Label = styledComponents.label`
    display: block;
    font-weight: bold;
    padding: 10px 0;
`;

const Input = styledComponents.input`
    flex-basis: 60%;
    border: 0;
    font-size: inherit;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid lightGray;
`;

const TextArea = styledComponents.textarea`
    flex-basis: 60%;
    border: 0;
    font-size: inherit;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid lightGray;
`;

const FormInput = ({
    id,
    label,
    type = 'text',
    handleOnChange,
    ...otherProps
}) => (
    <FormInputWrapper>
        <Label htmlFor={id}>{label}</Label>
        { type === 'textarea' ? (
            <TextArea id={id} onChange={e => handleOnChange(e.target.value)} {...otherProps} />
        ) : (
            <Input 
                id={id}
                type={type}
                onChange={e => handleOnChange(e.target.value)}
                {...otherProps}
            />
        )}
    </FormInputWrapper>
);

export default FormInput;
import styled from "styled-components";

export const Input = styled.input` 
    padding: 1rem;
    width: 100%;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.grey.grey1};
    border: 1px solid ${({theme}) => theme.colors.grey.grey3};
    &:focus{
        background-color: ${({theme}) => theme.colors.grey.grey2};
    }
`
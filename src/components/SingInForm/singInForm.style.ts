import styled from "styled-components";
import { Input } from "../Input/input.style";
import { Text } from "../Text";
import { Button } from "../Button/button.style";


export const Form = styled.form`
    width: 280px;
    height: 250px;
    z-index: 1;
    margin-bottom: 30px;
    @media (min-width: 920px) {
        width: 320px;
    }
`
export const InputEmail = styled(Input)`
    margin-bottom: 25px;
    ::placeholder {
        font-size: ${({theme}) => theme.typography.sizes.size2};
    }
`
export const InputPassword = styled(Input)`
    margin-bottom: 25px;
    ::placeholder {
        font-size: ${({theme}) => theme.typography.sizes.size2};
    }
`
export const H2 = styled(Text)`
    text-align: center;
    z-index: 1;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 250px;
`
export const Forgot = styled(Text)`
    z-index: 1;
    margin-top: 20px;
`
export const SingUpButton = styled(Button)`
    width: 100%;
    z-index: 1;
    font-weight: 600;
`
export const OpenModal = styled(Button)`
    background: none;
    color: ${({theme}) => theme.colors.brand.primary};
    font-size: ${({theme}) => theme.typography.sizes.size3};
    font-weight: 600;
    width: 100px;
    margin-top: 3px;
    height: 50px;
    z-index: 1;
`
export const ForgotPassword = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
`
export const DiviserTwo = styled.div`
    width: 100%;
    height: 1px;
    background: ${({theme}) => theme.colors.grey.grey3};
    z-index: 1;
    margin-bottom: 30px;
`
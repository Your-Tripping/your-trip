import styled from "styled-components";
import { Input } from "../../components/Input/input.style";
import {Text} from "../../components/Text";
import { Button } from "../../components/Button/button.style";
export const Main = styled.main`
    background: ${({theme}) => theme.colors.brand.tertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const BackgroundImg = styled.img`
    position: fixed;
    z-index: 0;
`
export const Logo = styled.img`
    width: 250px;
    z-index: 1;
    margin-top: 100px;
`
export const Diviser = styled.div`
    width: 280px;
    height: 1px;
    background: ${({theme}) => theme.colors.grey.grey3};
    z-index: 1;
    margin-bottom: 50px;
`
export const DiviserTwo = styled.div`
    width: 280px;
    height: 1px;
    background: ${({theme}) => theme.colors.grey.grey3};
    z-index: 1;
    margin-bottom: 30px;
`
export const ForgotPassword = styled.div`
    width: 280px;
    height: 50px;
    display: flex;
    justify-content: center;
`
export const Form = styled.form`
    width: 280px;
    height: 250px;
    z-index: 1;
    margin-bottom: 30px;
`
export const InputEmail = styled(Input)`
    height: 50px;
    width: 280px;
    z-index: 1;
    margin-bottom: 25px;
    padding-top: 13px;
    ::placeholder {
        font-size: ${({theme}) => theme.typography.sizes.size2};
    }
`
export const InputPassword = styled(Input)`
    height: 50px;
    width: 280px;
    z-index: 1;
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
export const SubmitBtn = styled(Button)`
    border: 1px solid ${({theme}) => theme.colors.brand.primary};
    height: 50px;
    width: 280px;
    z-index: 1;
    
`
export const BtnRegister = styled(SubmitBtn)`
    margin-bottom: 30px;
    @media (min-height: 800px){
        margin-bottom: 288px;
    }
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


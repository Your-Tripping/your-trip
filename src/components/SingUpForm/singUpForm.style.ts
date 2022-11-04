import styled from "styled-components";
import { Forgot, Form, H2, Diviser } from "../../pages/Home/home.style"
export const RegisterForm = styled(Form)`
    height: 900px;
    width: 280px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    @media (min-width: 800px){
        width: 350px;
        padding: 35px;
        top: 50px;
        padding-bottom: 0;
        margin-bottom: 150px
    }
`
export const Title = styled(H2)`
    color: ${({theme}) => theme.colors.brand.primary};
    font-size: 2rem;
`
export const Label = styled.label`
    color: ${({theme}) => theme.colors.grey.grey4};
    font-family: "Poppins",sans-serif;
    font-size: ${({theme}) => theme.typography.sizes.size2};
`
export const Exit = styled.button`
    background: none;
    font-size: 20px;
    margin-left: 5px;
    margin-top: 20px;
`
export const NewText = styled(Forgot)`
    margin: 0 auto;
    width: 250px;
`
export const NewDiviser = styled(Diviser)`
    margin-bottom: 20px;
    margin-top: 10px;
`

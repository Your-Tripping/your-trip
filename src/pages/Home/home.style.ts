import styled from "styled-components";
import { Text } from "../../components/Text";
export const Main = styled.main`
    background: ${({theme}) => theme.colors.brand.tertiary};
    display: flex;
    justify-content: center;
    height: 100vh;
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
`
export const Diviser = styled.div`
    width: 280px;
    height: 1px;
    background: ${({theme}) => theme.colors.grey.grey3};
    z-index: 1;
    margin-bottom: 50px;
`
export const H2 = styled(Text)`
    text-align: center;
    z-index: 1;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 250px;
`


import styled from "styled-components";
import colors from "../../styles/theme/colors";
import typography from "../../styles/theme/typography";
const Main = styled.main`
    background: ${colors.brand.tertiary};
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    .map{
        position: fixed;
        z-index: 0;
    }
    .logo{
        width: 250px;
        z-index: 1;
    }
    h2{
        text-align: center;
        z-index: 1;
        margin-bottom: 30px;
        margin-top: 30px;
        width: 250px;
    }
    .diviser{
        width: 280px;
        height: 1px;
        background: ${colors.grey.grey3};
        z-index: 1;
        margin-bottom: 50px;
    }
    .diviserTwo{
        width: 280px;
        height: 1px;
        background: ${colors.grey.grey3};
        z-index: 1;
        margin-bottom: 30px;
    }
    input{
        height: 50px;
        width: 280px;
        z-index: 1;
        margin-bottom: 25px;
        ::placeholder {
            font-size: ${typography.sizes.size2};
        }
    }
    form{
        width: 280px;
        height: 250px;
        z-index: 1;
        margin-bottom: 30px;
    }
    button{
        height: 50px;
        width: 280px;
        z-index: 1;
    }
    .openModal{
        background: none;
        color: ${colors.brand.primary};
        font-size: ${typography.sizes.size3};
        font-weight: 600;
        width: 100px;
        height: 30px;
        margin-top: 12px;
    }
    .forgotPassword{
        width: 280px;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    p{
        z-index: 1;
        margin-top: 20px;
    }
    .submitBtn{
        border: 1px solid ${colors.brand.primary};
    }
    
`
export default Main;
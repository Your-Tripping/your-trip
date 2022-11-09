import styled from "styled-components";

export const Form = styled.form<{background: boolean}>`
  width: 280px;
  background-color: ${({theme, background}) => background && theme.colors.grey.grey1};
  padding: 1rem;
  border-radius: 5px;
  animation: transitionOpacity 1s ease;
  @media (min-width: 920px) {
    width: 380px;
  }
  @keyframes transitionOpacity {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
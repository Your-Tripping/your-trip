import styled from "styled-components";

export const LiCard = styled.li`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  margin-bottom: 20px;
  .Profile::before {
    content: "";
    width: 100%;
    height: 1px;
    display: block;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.grey.grey2};
  }
`;

export const SectionProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: relative;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      width: 46px;
      height: 46px;
      border: 1px solid ${({ theme }) => theme.colors.grey.grey2};
      border-radius: 50%;
    }
  }
  div + div {
    button {
      padding: 10px 20px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.brand.tertiary};
      color: ${({ theme }) => theme.colors.brand.primary};
    }
    svg {
      font-size: 1.9rem;
      cursor: pointer;
      border: none;
      border-radius: unset;
    }
  }
`;

export const SectionSlideshow = styled.div`
  width: 100%;
  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.size3};
    margin: 1rem 0;
  }
  div {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
      border-radius: 4px;
    }
    svg {
      position: absolute;
      height: 100%;
      top: 0;
      font-size: 3rem;
      cursor: pointer;
    }
    svg + svg {
      right: 0;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      width: auto;
      padding: 10px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      background-color: ${({ theme }) => theme.colors.grey.grey1};
      opacity: 0.6;
      border-radius: 10px;
      svg {
        position: static;
        font-size: 1.875rem;
        background-color: transparent;
        cursor: pointer;
      }
      p {
        padding: 0;
        font-size: ${({ theme }) => theme.typography.sizes.size1};
        font-weight: 600;
      }
    }
  }

  h3 {
    padding: 15px 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
  }
  p {
    font-size: ${({ theme }) => theme.typography.sizes.size4};
  }
`;

export const SectionLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      position: static;
      font-size: 1.875rem;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

export const SectionLomments = styled.div`
  display: flex;
  align-items: center;
  input {
    color: ${({ theme }) => theme.colors.grey.grey4};
  }
  svg {
    position: static;
    font-size: 1.875rem;
    background-color: transparent;
    cursor: pointer;
    margin-left: -60px;
  }
`;
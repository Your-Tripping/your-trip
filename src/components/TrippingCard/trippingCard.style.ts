import styled from "styled-components";

export const LiCard = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grey.grey1};

  padding: 20px 0;

  .Profile::before {
    content: "";
    width: calc(100% - 40px);
    height: 1px;

    display: block;

    position: absolute;
    bottom: 0;

    margin: 0 auto;

    background-color: ${({ theme }) => theme.colors.grey.grey2};
  }
`;

export const SectionProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;

  padding: 0 20px;

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

    h2 {
      font-size: ${({ theme }) => theme.typography.sizes.size2};
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

export const SectionSlideshow = styled.section`
  width: 100%;

  h2 {
    padding: 0 0 15px 20px;
    margin: 0;

    font-size: ${({ theme }) => theme.typography.sizes.size3};
  }

  div {
    width: 100%;

    position: relative;

    img {
      width: 100%;
      object-fit: cover;
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
    padding: 15px 0 10px 20px;
    margin: 0;

    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
  }

  p {
    padding: 0 0 10px 20px;
    font-size: ${({ theme }) => theme.typography.sizes.size4};
  }
`;

export const SectionLinks = styled.section`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 0 20px;

    svg {
      position: static;
      font-size: 1.875rem;
      background-color: transparent;
      cursor: pointer;
    }

    h3 {
      padding: 0;
    }
  }
`;

export const SectionLomments = styled.section`
  display: flex;
  align-items: center;

  input {
    width: calc(100% - 40px);
    margin: 0 20px;
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

export interface iPosts {
  id: number;
  userId: number;
  username: string;
  country: string;
  profileUrl: string;
  title: string;
  location: string;
  places: Iplaces[];
}

export interface Iplaces {
  id: number;
  name: string;
  image: string;
  description: string;
}

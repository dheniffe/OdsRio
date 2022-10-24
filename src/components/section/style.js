import styled from "styled-components/macro";

export const Container = styled.section`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

export const BoxImage = styled.figure`
  cursor: pointer;
`;

export const Image = styled.img`
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

export const ImageDescription = styled.figcaption`
  ${({ isDescriptionOpen }) =>
    isDescriptionOpen ? "display: none;" : "display: flex;"}
  margin-top: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const BoxDescription = styled.div`
  max-width: 560px;

  h2 {
    margin-bottom: 1.5rem;
    line-height: 20px;
    letter-spacing: 0.1rem;

    @media (max-width: 1000px) {
      margin-top: 1rem;
    }
  }
`;

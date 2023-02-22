import styled from "styled-components";

export const ProductSection = styled.section``;
export const ProductUl = styled.ul`
  display: flex;
  gap: 20px;
  width: fit-content;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    width: 684px;
  }
  @media (min-width: 1200px) {
    width: 721px;
  }
  @media (min-width: 1300px) {
    width: 780px;
  }
  @media (min-width: 1400px) {
    width: 881px;
  }
  @media (min-width: 1600px) {
    width: 1016px;
  }
`;

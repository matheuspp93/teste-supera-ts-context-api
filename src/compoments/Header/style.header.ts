import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 14px 16px 14px 16px;
  background-color: ${({ theme }) => theme.colors.gray.tertiary};
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 80px 0px 80px;
  }
  @media (min-width: 1600px) {
    padding: 0px 109px 0px 109px;
  }
  p {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  width: 309px;

  @media (min-width: 1200px) {
    width: 361px;
  }
  @media (min-width: 1600px) {
    width: 365px;
  }
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.colors.gray.quartiary};
  width: 100%;
  height: 60px;
  margin-top: 13.9px;
  border-radius: 8px;
  padding: 10px;
  @media (min-width: 780px) {
    margin-bottom: 10px;
  }
`;
export const Button = styled.button`
  position: absolute;
  top: 15px;
  left: 208px;
  background-color: ${({ theme }) => theme.colors.green.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray.quartiary};
  height: 40px;
  width: 85px;
  margin-top: 10px;
  @media (min-width: 320px) {
    left: 211px;
  }
  @media (min-width: 1200px) {
    left: 255px;
  }
`;

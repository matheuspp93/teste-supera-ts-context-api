import styled from "styled-components";

export const ProductLi = styled.li`
  width: 239px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  @media (min-width: 1024px) {
    width: 209px;
  }
  @media (min-width: 1200px) {
    width: 219px;
  }
  @media (min-width: 1300px) {
    width: 233px;
  }
  @media (min-width: 1400px) {
    width: 270px;
  }
  @media (min-width: 1600px) {
    width: 300px;
  }
`;

export const ProductDiv = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray.tertiary};
  width: 100%;
  align-items: center;
`;
export const ProductImg = styled.img`
  object-fit: cover;
  margin: 0 auto;
  width: 160px;
`;

export const Div = styled.div`
  padding: 0px 0px 0px 21px;
`;
export const ProdutctH2 = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-top: 14px;
`;

export const ProductPrice = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  display: block;
  color: ${({ theme }) => theme.colors.gray.primary};
  margin-top: 14px;
`;

export const ProductSpanValue = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.green.primary};
`;
export const ProductButton = styled.button`
  width: 106px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.green.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray.quartiary};
  margin-top: 14px;
`;

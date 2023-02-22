import styled from "styled-components";

export const CartSection = styled.section`
  margin-top: 20px;
  @media (min-width: 1024px) {
    width: 100%;
    margin-top: 0;
  }
  @media (min-width: 1400px) {
    width: 100%;
  }
`;

export const CartH2 = styled.h2`
  background-color: ${({ theme }) => theme.colors.green.primary};
  color: ${({ theme }) => theme.colors.gray.quartiary};
  width: 100%;
  height: 65px;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 22px 0 13px 20.93px;
`;

export const CartUl = styled.ul`
  display: flex;
  flex-direction: column;
  height: 253px;
  padding: 20px 18.45px 0 18.45px;
  gap: 23px;
  background-color: ${({ theme }) => theme.colors.gray.quartiary};
  overflow-y: scroll;
`;

export const CartLi = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const CartDivImg = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.gray.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
export const Cartimg = styled.img`
  height: 50px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.gray.tertiary};
`;
export const CartP = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`;
export const CartSapn = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.gray.secondary};
`;
export const CartButton = styled.button`
  margin-bottom: 47px;
  margin-left: 52px;
  color: ${({ theme }) => theme.colors.gray.secondary};
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
`;

export const CartDviSectionTotal = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.quartiary};
  padding: 20px 20.45px 0 18.45px;
  height: 128px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const Cartdiv1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartSpanTotal = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
`;
export const CartSpanPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray.secondary};
  margin-right: 4px;
`;
export const CartButtonRemoveAll = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.gray.tertiary};
  border: 2px solid ${({ theme }) => theme.colors.gray.tertiary};
  border-radius: 8px;
  margin-top: 10px;
`;

export const DivVazia = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.quartiary};
  display: flex;
  text-align: center;
  height: 140px;
  flex-direction: column;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const P = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 56px;
`;
export const SpanAdd = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-top: 13px;
`;

export const CardBox = styled.div`
  display: flex;
`;

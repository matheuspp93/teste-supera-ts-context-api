import { useContext } from "react";
import { AuthContext } from "../../Contexts/ProductContext";
import * as S from "./style.card";
import products from "../../database/products.json";

const Card = () => {
  const { handleClick, filter } = useContext(AuthContext);

  return (
    <>
      {products.map((element) => {
        return (
          <S.ProductLi>
            <S.ProductDiv>
              <S.ProductImg
                src={require(`assets/img/${element.image}`)}
                alt={element.name}
              />
            </S.ProductDiv>
            <S.Div>
              <S.ProdutctH2>{element.name}</S.ProdutctH2>
              <S.ProductPrice>{element.score}</S.ProductPrice>
              <S.ProductSpanValue>R$:{element.price}</S.ProductSpanValue>
              <S.ProductButton
                key={element.id}
                onClick={() => handleClick(element.id)}
              >
                Adicionar
              </S.ProductButton>
            </S.Div>
          </S.ProductLi>
        );
      })}
    </>
  );
};
export default Card;

import { useContext } from "react";
import { AuthContext } from "../../Contexts/ProductContext";
import * as S from "./style.card";

const Card = () => {
  const { products, handleClick, filter } = useContext(AuthContext);

  return (
    <>
      {products.map((element) => (
        <S.ProductLi>
          <S.ProductDiv>
            <S.ProductImg
              // src={require(`../src/assets/img/${element.image}`)}
              alt={element.name}
            />
          </S.ProductDiv>
          <S.Div>
            <S.ProdutctH2>{element.name}</S.ProdutctH2>
            <S.ProductSpan>{element.score}</S.ProductSpan>
            <S.ProductSpanValue>R$:{element.price}</S.ProductSpanValue>
            <S.ProductButton
              // id={element.id}
              onClick={() => handleClick(element.id)}
            >
              Adicionar
            </S.ProductButton>
          </S.Div>
        </S.ProductLi>
      ))}
    </>
  );
};
export default Card;

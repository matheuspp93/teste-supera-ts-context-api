import { useContext } from "react";
import { AuthContext } from "../../Contexts/ProductContext";
import * as S from "./style.card";
import products from "../../database/products.json";

const Card = () => {
  const { addProduct, filter } = useContext(AuthContext);

  return (
    <>
      {products.map((element) => {
        return (
          <S.Product>
            <S.ImageBackGround>
              <S.ProductImg
                src={require(`assets/img/${element.image}`)}
                alt={element.name}
              />
            </S.ImageBackGround>
            <S.ProductContent>
              <S.ProdutctTitle>{element.name}</S.ProdutctTitle>
              <S.ProductPrice>{element.score}</S.ProductPrice>
              <S.ProductValue>R$:{element.price}</S.ProductValue>
              <S.ProductButton
                key={element.id}
                onClick={() => addProduct(element.id)}
              >
                Adicionar
              </S.ProductButton>
            </S.ProductContent>
          </S.Product>
        );
      })}
    </>
  );
};
export default Card;

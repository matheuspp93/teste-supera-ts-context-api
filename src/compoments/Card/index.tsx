import { useContext } from "react";
import { AuthContext } from "../../Contexts/ProductContext";
import * as S from "./style.card";

const Card = () => {
  const { addProduct, products } = useContext(AuthContext);

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
              <S.ProductPrice>Score: {element.score}</S.ProductPrice>
              <S.ProductValue>
                R$:{`${element.price.toFixed(2)}`.replace(".", ",")}
              </S.ProductValue>
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

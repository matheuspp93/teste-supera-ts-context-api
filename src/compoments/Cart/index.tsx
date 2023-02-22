import * as S from "./style.cart";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/ProductContext";

const Cart = () => {
  const { currentSale, setCurrentSale } = useContext(AuthContext);

  const calculateSubTotal = currentSale.reduce((act, aca) => {
    return act + aca.price * aca.amount;
  }, 0);

  const calculateTotal = currentSale.reduce((act, aca) => {
    return act + aca.amount;
  }, 0);

  const removeProduct = (productId: number) => {
    const game = currentSale.find((game) => game.id === productId);
    if (game?.amount === 1) {
      setCurrentSale(currentSale.filter((game) => game.id !== productId));
    } else {
      const newList = currentSale.map((game) => {
        if (game.id === productId) {
          game.amount -= 1;
        }
        return game;
      });
      setCurrentSale(newList);
    }
  };

  const removeAll = () => {
    setCurrentSale([]);
  };
  return (
    <S.CartSection>
      <S.CartH2>Carrinho de Compra</S.CartH2>
      {currentSale.length > 0 ? (
        <div>
          <S.CartUl>
            {currentSale.map((elemento) => (
              <S.CartLi>
                <S.CardBox>
                  <S.CartDivImg>
                    <S.Cartimg
                      src={require(`assets/img/${elemento.image}`)}
                      alt=""
                    />
                  </S.CartDivImg>
                  <div>
                    <S.CartP>{elemento.name}</S.CartP>
                    <S.CartSapn>{elemento.price}</S.CartSapn>
                    <S.CartSapn>Amount: {elemento.amount}</S.CartSapn>
                  </div>
                </S.CardBox>
                <div>
                  <S.CartButton onClick={() => removeProduct(elemento.id)}>
                    Remover
                  </S.CartButton>
                </div>
              </S.CartLi>
            ))}
          </S.CartUl>
          <S.CartDviSectionTotal>
            <S.Cartdiv1>
              <S.CartSpanTotal>Total</S.CartSpanTotal>
              <S.CartSpanPrice>{calculateTotal}</S.CartSpanPrice>
            </S.Cartdiv1>
            <S.Cartdiv1>
              <S.CartSpanTotal>Subtotal</S.CartSpanTotal>
              <S.CartSpanPrice>
                R${calculateSubTotal.toFixed(2).replace(".", ",")}
              </S.CartSpanPrice>
            </S.Cartdiv1>
            <S.CartButtonRemoveAll onClick={() => removeAll()}>
              Remover todos
            </S.CartButtonRemoveAll>
          </S.CartDviSectionTotal>
        </div>
      ) : (
        <S.DivVazia>
          <S.P> Sua Sacola está vazia</S.P>
          <S.SpanAdd>Adicione itens</S.SpanAdd>
        </S.DivVazia>
      )}
    </S.CartSection>
  );
};

export default Cart;

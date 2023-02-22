import * as S from "./style.cart";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/ProductContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { currentSale, setCurrentSale, addProduct } = useContext(AuthContext);

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
      toast.dismiss();
      toast.success("Item removido do carrinho!!");
    }
  };

  const removeAll = () => {
    setCurrentSale([]);
  };
  return (
    <S.Cart>
      <S.CartTitle>Carrinho de Compra</S.CartTitle>
      {currentSale.length > 0 ? (
        <div>
          <S.CartList>
            {currentSale.map((product) => (
              <S.CartItem>
                <S.CardBox>
                  <S.BackGrounImage>
                    <S.ItemmImg
                      src={require(`assets/img/${product.image}`)}
                      alt=""
                    />
                  </S.BackGrounImage>
                  <div>
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.ProductPrice>{product.price}</S.ProductPrice>
                    <S.ProductAmount>
                      <span>Amount: {product.amount}</span>
                      <button onClick={() => addProduct(product.id)}>+</button>
                      <button onClick={() => removeProduct(product.id)}>
                        -
                      </button>
                    </S.ProductAmount>
                  </div>
                </S.CardBox>
                <div>
                  <S.CartButton onClick={() => removeProduct(product.id)}>
                    Remover
                  </S.CartButton>
                </div>
              </S.CartItem>
            ))}
          </S.CartList>
          <S.PurchaseTotal>
            <S.Total>
              <span>Total</span>
              <S.CartSpanPrice>{calculateTotal}</S.CartSpanPrice>
            </S.Total>
            <S.Total>
              <span>Subtotal</span>
              <S.CartSpanPrice>
                R${calculateSubTotal.toFixed(2).replace(".", ",")}
              </S.CartSpanPrice>
            </S.Total>
            <S.CartButtonRemoveAll onClick={() => removeAll()}>
              Remover todos
            </S.CartButtonRemoveAll>
          </S.PurchaseTotal>
        </div>
      ) : (
        <S.EmptyCart>
          <p> Sua Sacola está vazia</p>
          <span>Adicione itens</span>
        </S.EmptyCart>
      )}
    </S.Cart>
  );
};

export default Cart;

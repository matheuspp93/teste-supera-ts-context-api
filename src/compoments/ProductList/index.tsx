import Cart from "compoments/Cart";
import Products from "../Products";
import * as S from "./style.product-list";

const ProducstList = () => {
  return (
    <S.Main>
      <div>
        <Products />
      </div>
      <Cart />
    </S.Main>
  );
};

export default ProducstList;

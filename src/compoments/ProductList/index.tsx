import Cart from "compoments/Cart";
import Product from "../Product";
import * as S from "./style.product-list";

const ProducstList = () => {
  return (
    <S.Main>
      <div>
        <Product />
      </div>
      <Cart />
    </S.Main>
  );
};

export default ProducstList;

import * as S from "./style.header";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/ProductContext";

const Header = ({}) => {
  const { search } = useContext(AuthContext);

  return (
    <S.Header>
      <p>Geek</p>
      <S.Div>
        <S.Input
          onChange={(event) => search(event.target.value)}
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <S.Button type="submit">Pesquisar</S.Button>
      </S.Div>
    </S.Header>
  );
};
export default Header;

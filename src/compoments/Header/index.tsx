import * as S from "./style.header";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/ProductContext";

const Header = ({}) => {
  const { searchGame } = useContext(AuthContext);

  return (
    <S.Header>
      <p>Loja Geek</p>
      <S.SearchBox>
        <S.SearchInput
          onChange={(event) => searchGame(event.target.value)}
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <S.Button type="submit">Pesquisar</S.Button>
      </S.SearchBox>
    </S.Header>
  );
};
export default Header;

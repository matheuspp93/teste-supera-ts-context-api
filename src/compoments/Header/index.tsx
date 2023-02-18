import * as S from "./style.header";

const Header = ({}) => {
  return (
    <S.Header>
      <p>Geek</p>
      <S.Div>
        <S.Input
          //   onChange={(event) => search(event.target.value)}
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <S.Button type="submit">Pesquisar</S.Button>
      </S.Div>
    </S.Header>
  );
};
export default Header;

import * as S from "./styles";

import imgfood from "../../assets/image/logo.svg";

const Header = () => (
  <S.Content className="container">
    <h1>
      <img src={imgfood} alt="logo da efood" />
    </h1>
    <S.Text>Viva experiências gastronômicas no conforto da sua casa</S.Text>
  </S.Content>
);

export default Header;

import { useDispatch, useSelector } from "react-redux";

import { open } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

import imgfood from "../../assets/image/logo.svg";
import overlay from "../../assets/image/sombra.png";
import * as S from "./styles";
import { Establishment } from "../../pages/Home";

type Props = {
  content: Establishment;
};

const HeaderPerfil = ({ content }: Props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const openCart = () => {
    dispatch(open());
  };

  return (
    <div>
      <S.ContentProfile className="container">
        <S.LinkProfile title="clique aqui para voltar aos restaurantes" to="/">
          Restautantes
        </S.LinkProfile>
        <img src={imgfood} alt="logo da efood" />
        <S.CartProfile role="button" onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartProfile>
      </S.ContentProfile>
      <S.TextProfile>
        <S.TitleTypeProfile>{content.tipo}</S.TitleTypeProfile>
        <S.TitleProfile>{content.titulo}</S.TitleProfile>
        <img className="sombra" src={overlay} alt="sombra do banner" />
      </S.TextProfile>
    </div>
  );
};

export default HeaderPerfil;

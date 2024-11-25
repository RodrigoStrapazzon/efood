import { useDispatch, useSelector } from "react-redux";

import {
  LinkPerfil,
  CartPerfil,
  ContentPerfil,
  TituloTipoPerfil,
  TituloPerfil,
  TextoPerfil,
} from "./styles";

import LogoEfood from "../../assets/image/logo.svg";
import sombra from "../../assets/image/sombra.png";
import { Establishment } from "../../pages/Home";

import { open } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

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
    <>
      <ContentPerfil>
        <LinkPerfil to="/">Restaurantes</LinkPerfil>
        <img src={LogoEfood} alt="logo da efood" />
        <CartPerfil onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartPerfil>
      </ContentPerfil>
      <TextoPerfil>
        <TituloTipoPerfil>{content.tipo}</TituloTipoPerfil>
        <TituloPerfil>{content.titulo}</TituloPerfil>
        <img className="sombra" src={sombra} alt="sombra do banner" />
      </TextoPerfil>
    </>
  );
};

export default HeaderPerfil;

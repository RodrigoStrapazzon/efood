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

type Props = {
  content: Establishment;
};

const HeaderPerfil = ({ content }: Props) => {
  return (
    <>
      <ContentPerfil>
        <LinkPerfil to="/">Restaurantes</LinkPerfil>
        <img src={LogoEfood} alt="logo da efood" />
        <CartPerfil>0 produto(s) no carrinho</CartPerfil>
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

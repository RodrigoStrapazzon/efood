import { useState } from "react";

import { ButtonCart } from "../Button/styles";
import {
  BoxMenu,
  DescriptionMenu,
  ModalContainer,
  ModalContent,
  ModalDescription,
  TitleMenu,
} from "./styles";

import fecharImg from "../../assets/image/fechar.png";

type Props = {
  image: string;
  preco: number;
  item?: number;
  title: string;
  description: string;
  porcao: string;
};

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

const MenuList = ({ image, title, description, preco, porcao }: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 163) {
      return description.slice(0, 160) + "...";
    }
    return description;
  };

  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  return (
    <>
      <BoxMenu>
        <img src={image} alt={title} />
        <TitleMenu>{title}</TitleMenu>
        <DescriptionMenu>{getDescricao(description)}</DescriptionMenu>
        <ButtonCart
          type="button"
          title="clique aqui"
          onClick={() => setModalEstaAberto(true)}
        >
          Adicionar ao carrinho
        </ButtonCart>
      </BoxMenu>

      <ModalContainer className={modalEstaAberto ? "visivel" : ""}>
        <ModalContent>
          <img src={image} alt={title} />
          <ModalDescription>
            <h2>{title}</h2>
            <img
              src={fecharImg}
              alt="Ícone de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <p>{description}</p>
            <p>{`Serve: ${porcao}`}</p>
            <button>{`Adicionao ao carrinho R$ - ${formataPreco(
              preco
            )}`}</button>
          </ModalDescription>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </ModalContainer>
    </>
  );
};

export default MenuList;

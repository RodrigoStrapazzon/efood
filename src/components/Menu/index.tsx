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

import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";
import Button from "../Button";
import { MenuItem } from "../../pages/Home";

type Props = {
  image: string;
  preco: number;
  title: string;
  description: string;
  porcao: string;
  item: MenuItem;
};

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

const MenuList = ({
  image,
  title,
  description,
  preco,
  porcao,
  item,
}: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 163) {
      return description.slice(0, 160) + "...";
    }
    return description;
  };

  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(item!));
    dispatch(open());
  };

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
            <Button
              type="button"
              title="Clique para adicinar ao carrinho"
              onClick={addToCart}
            >{`Adicionao ao carrinho R$ - ${formataPreco(preco)}`}</Button>
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

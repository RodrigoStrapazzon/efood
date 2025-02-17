import { useDispatch } from "react-redux";
import { useState } from "react";

import { parseToBrl } from "../../utils";
import { MenuItem } from "../../pages/Home";
import { ButtonCart } from "../Button/styles";
import Button from "../Button";

import closeImg from "../../assets/image/fechar.png";
import * as S from "./styles";

type Props = {
  image: string;
  preco: number;
  title: string;
  description: string;
  porcao: string;
  item: MenuItem;
};

const MenuList = ({
  image,
  title,
  description,
  preco,
  porcao,
  item,
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 163) {
      return text.slice(0, 160) + "...";
    }
    return text;
  };

  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(item!));
    dispatch(open());
  };

  return (
    <>
      <S.BoxMenu>
        <img src={image} alt={title} />
        <S.TitleMenu>{title}</S.TitleMenu>
        <S.DescriptionMenu>{getDescription(description)}</S.DescriptionMenu>
        <ButtonCart
          type="button"
          title="clique aqui"
          onClick={() => setOpenModal(true)}
        >
          Adicionar ao carrinho
        </ButtonCart>
      </S.BoxMenu>

      <S.ModalContainer className={openModal ? 'is-visible' : ''}>
        <S.ModalContent>
          <img src={image} alt={title} />
          <S.ModalDescription>
            <h2>{title}</h2>
            <img
              src={closeImg}
              alt="Ícone de fechar"
              onClick={() => setOpenModal(false)}
            />
            <p>{description}</p>
            <p>{`Serve: ${porcao}`}</p>
            <Button
              type="button"
              title="Clique para adicinar ao carrinho"
              onClick={addToCart}
              >{`Adicionao ao carrinho R$ - ${parseToBrl(preco)}`}</Button>
              </S.ModalDescription>
            </S.ModalContent>
            <div className="overlay" onClick={() => setOpenModal(false)}></div>
          </S.ModalContainer>
    </>
  );
};

export default MenuList;

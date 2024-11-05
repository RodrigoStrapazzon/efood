import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ListMenu from "../../components/MenuList";
import HeaderPerfil from "../../components/HeaderPerfil";
import { ContainerPerfil } from "./styles";
import { Establishment } from "../Home";

const Perfil = () => {
  const { id } = useParams();

  const [cardapio, setCardapio] = useState<Establishment>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res));
  }, [id]);

  if (!cardapio) {
    return <h3>Carregando...</h3>;
  }

  return (
    <ContainerPerfil>
      <HeaderPerfil
        content={{
          id: cardapio.id,
          titulo: cardapio.titulo,
          destacado: cardapio.destacado,
          capa: cardapio.capa,
          tipo: cardapio.tipo,
          avaliacao: cardapio.avaliacao,
          descricao: cardapio.descricao,
          cardapio: [],
        }}
      />
      <img className="imgPerfil" src={cardapio.capa} alt={cardapio.titulo} />
      <ListMenu menu={cardapio.cardapio} />
    </ContainerPerfil>
  );
};

export default Perfil;

import Button from "../Button";
import Tag from "../Tag";

import star from "../../assets/image/star.svg";

import {
  BoxContainer,
  BoxContent,
  Descricao,
  TagTitle,
  TitleContainer,
  Titulo,
} from "./styles";

type Props = {
  id: number;
  title: string;
  note: number;
  contents: string[];
  description: string;
  image: string;
};

const Restaurant = ({
  id,
  title,
  note,
  contents,
  description,
  image,
}: Props) => (
  <BoxContainer>
    <img src={image} alt={title} />
    <BoxContent>
      <TitleContainer>
        <Titulo>{title}</Titulo>
        <div className="note">
          <Titulo>{note}</Titulo>
          <img className="star" src={star} alt="ícone estrela" />
        </div>
      </TitleContainer>
      <TagTitle>
        {contents.map((content) => (
          <Tag key={content}>{content}</Tag>
        ))}
      </TagTitle>
      <Descricao>{description}</Descricao>
      <Button type="link" to={`/perfil/${id}`} title="clique e saiba mais">
        Saiba mais
      </Button>
    </BoxContent>
  </BoxContainer>
);
export default Restaurant;

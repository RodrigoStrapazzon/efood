import Button from "../Button";
import Tag from "../Tag";

import star from "../../assets/image/star.svg";

import * as S from './styles'

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
  <S.BoxContainer>
    <img src={image} alt={title} />
    <S.BoxContent>
      <S.TitleContainer>
        <S.Titulo>{title}</S.Titulo>
        <div className="note">
          <S.Titulo>{note}</S.Titulo>
          <img className="star" src={star} alt="ícone estrela" />
        </div>
      </S.TitleContainer>
      <S.TagTitle>
        {contents.map((content) => (
          <Tag key={content}>{content}</Tag>
        ))}
      </S.TagTitle>
      <S.Descricao>{description}</S.Descricao>
      <Button type="link" to={`/perfil/${id}`} title="clique e saiba mais">
        Saiba mais
      </Button>
    </S.BoxContent>
  </S.BoxContainer>
);
export default Restaurant;

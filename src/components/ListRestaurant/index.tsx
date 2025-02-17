import { Establishment } from "../../pages/Home";
import Restaurant from "../BoxRestaurant";
import * as S from './styles'

type Props = {
  title?: string;
  description?: string;
  restaurant: Establishment[];
};

const RestaurantList = ({ title, restaurant }: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 250) {
      return text.slice(0, 245) + '...'
    }
    return text;
  };

  const getTags = (restaurant: Establishment) => {
    const tags = [];

    if (restaurant.destacado) {
      tags.push(`Destaque da semana`);
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo);
    }

    return tags;
  };

  return (
    <S.Container>
      <div className="container">
        <h2>{title}</h2>
        <ul>
          <S.List>
            {restaurant.map((restaurant) => (
              <Restaurant
                key={restaurant.id}
                id={restaurant.id}
                image={restaurant.capa}
                title={restaurant.titulo}
                note={restaurant.avaliacao}
                contents={getTags(restaurant)}
                description={getDescription(restaurant.descricao)}
              />
            ))}
          </S.List>
        </ul>
      </div>
    </S.Container>
  );
};

export default RestaurantList;

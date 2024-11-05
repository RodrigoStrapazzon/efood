import { Establishment } from "../../pages/Home";
import Restaurant from "../BoxRestaurant";
import { Container, List } from "./styles";

type Props = {
  title?: string;
  description?: string;
  restaurant: Establishment[];
};

const RestaurantList = ({ title, restaurant }: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 250) {
      return description.slice(0, 245) + "...";
    }
    return description;
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
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <ul>
          <List>
            {restaurant.map((restaurant) => (
              <Restaurant
                key={restaurant.id}
                id={restaurant.id}
                image={restaurant.capa}
                title={restaurant.titulo}
                note={restaurant.avaliacao}
                contents={getTags(restaurant)}
                description={getDescricao(restaurant.descricao)}
              />
            ))}
          </List>
        </ul>
      </div>
    </Container>
  );
};

export default RestaurantList;

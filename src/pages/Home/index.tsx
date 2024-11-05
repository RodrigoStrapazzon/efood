import { useEffect, useState } from "react";
import Header from "../../components/Header";
import RestaurantList from "../../components/ListRestaurant";

export interface MenuItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export type Establishment = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: MenuItem[];
};

const Home = () => {
  const [restaurantList, setRestaurantList] = useState<Establishment[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurantList(res));
  }, []);

  if (!restaurantList) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header />
      <RestaurantList restaurant={restaurantList} />
    </>
  );
};

export default Home;

import Header from "../../components/Header";
import RestaurantList from "../../components/ListRestaurant";

import { useGetHomeQuery } from "../../services/api";

// export interface MenuItem {
//   foto: string;
//   preco: number;
//   id: number;
//   nome: string;
//   descricao: string;
//   porcao: string;
// }

// export type Establishment = {
//   id: number;
//   titulo: string;
//   destacado: boolean;
//   tipo: string;
//   avaliacao: number;
//   descricao: string;
//   capa: string;
//   cardapio: MenuItem[];
// };

const Home = () => {
  const { data: restaurant } = useGetHomeQuery();

  if (!restaurant) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header />
      <RestaurantList restaurant={restaurant} />
    </>
  );
};

export default Home;

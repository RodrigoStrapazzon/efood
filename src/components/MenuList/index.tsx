import { MenuItem } from "../../pages/Home";
import MenuList from "../Menu";
import { ContainerMenu, List } from "./styles";

type Props = {
  menu: MenuItem[];
};

const ListMenu = ({ menu }: Props) => (
  <ContainerMenu>
    <div className="container">
      <List>
        {menu.map((menu) => (
          <li key={menu.id}>
            <MenuList
              image={menu.foto}
              preco={menu.preco}
              item={menu}
              title={menu.nome}
              description={menu.descricao}
              porcao={menu.porcao}
            />
          </li>
        ))}
      </List>
    </div>
  </ContainerMenu>
);

export default ListMenu;

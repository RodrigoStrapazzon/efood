import { MenuItem } from "../../pages/Home";
import MenuList from "../Menu";
import * as S from './styles'

type Props = {
  menu: MenuItem[];
};

const ListMenu = ({ menu }: Props) => (
  <S.ContainerMenu>
    <div className="container">
      <S.List>
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
      </S.List>
    </div>
  </S.ContainerMenu>
);

export default ListMenu;

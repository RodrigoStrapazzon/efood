import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import {
  CartContainer,
  CartItem,
  ContainerItem,
  ContainerPrices,
  Overlay,
  Quantity,
  Sidebar,
} from "./styles";

import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { formataPreco } from "../Menu";
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  const getTotalPrices = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };
  const removeItem = (id: number) => {
    dispatch(remove(id));
  };
  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <ContainerItem>
                <h3>{item.nome}</h3>
                <span>{`R$ ${formataPreco(item.preco)}`}</span>
              </ContainerItem>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} item(s) no carrinho</Quantity>
        <ContainerPrices>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrices())}</p>
        </ContainerPrices>
        <Button title="Clique aqui para continuar para entrega" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  );
};
export default Cart;

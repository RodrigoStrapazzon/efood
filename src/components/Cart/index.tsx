import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { RootReducer } from "../../store";

import { clear, close, open, remove } from "../../store/reducers/cart";
import { usePurchaseMutation } from "../../services/api";
import { parseToBrl } from "../../utils/index";

import * as S from "./styles";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const [address, setAddress] = useState(false);
  const [payment, setPayment] = useState(false);
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      numberHouse: "",
      complement: "",
      cardOwner: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      address: Yup.string()
        .min(5, "O endereço precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      city: Yup.string()
        .min(5, "O nome da cidade precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      zipCode: Yup.string()
        .min(10, "O campo precisa ter 9 caracteres")
        .max(10, "O campo precisa ter 9 caracteres")
        .required("O campo é obrigatório"),
      numberHouse: Yup.string()
        .min(1, "O campo precisa ter 1 caracteres")
        .max(4, "O campo precisa ter 4 caracteres")
        .required("O campo é obrigatório"),
      complement: Yup.string().min(
        7,
        "O nome precisa ter pelo menos 7 caracteres"
      ),
      cardOwner: Yup.string()
        .min(5, "O campo precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      cardNumber: Yup.string()
        .min(19, "O campo precisa ter pelo menos 19 caracteres")
        .max(20, "O campo precisa ter pelo menos 19 caracteres")
        .required("O campo é obrigatório"),
      cardCode: Yup.string()
        .min(3, "O campo precisa ter pelo menos 3 caracteres")
        .required("O campo é obrigatório"),
      expiresMonth: Yup.string()
        .min(2, "O campo precisa ter pelo menos 7 caracteres")
        .required("O campo é obrigatório"),
      expiresYear: Yup.string()
        .min(2, "O campo precisa ter pelo menos 7 caracteres")
        .required("O campo é obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.numberHouse),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
      });
    },
  });
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(close());
    setAddress(true);
  };

  const closeOverlay = () => {
    dispatch(close());
    setAddress(false);
    setPayment(false);
  };

  const backCart = (e: FormEvent) => {
    e.preventDefault();
    dispatch(open());
    setAddress(false);
  };

  const openPayment = (e: FormEvent) => {
    e.preventDefault();
    setAddress(false);
    setPayment(true);
  };

  const backAdress = (e: FormEvent) => {
    e.preventDefault();
    setPayment(false);
    setAddress(true);
  };
  const getTotalPrices = () => {
    return items.reduce((accumulator, currentItem) => {
      if (currentItem.preco) {
        return (accumulator += currentItem.preco);
      }
      return 0;
    }, 0);
  };
  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
    }
  }, [isSuccess, dispatch]);

  return (
    <>
      <div>
        <S.CartContainer className={isOpen ? "is-open" : ""}>
          <S.Overlay onClick={closeOverlay} />
          <S.Sidebar>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <S.ContainerItem>
                        <h3>{item.nome}</h3>
                        <span>{`R$ ${parseToBrl(item.preco)}`}</span>
                      </S.ContainerItem>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Quantity>{items.length} item(s) no carrinho</S.Quantity>
                <S.ContainerPrices>
                  <p>Valor total</p>
                  <p>{parseToBrl(getTotalPrices())}</p>
                </S.ContainerPrices>
                <Button
                  onClick={closeCart}
                  title="Clique aqui para continuar para entrega"
                  type="button"
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione um item ao carrinho.
              </p>
            )}
          </S.Sidebar>
        </S.CartContainer>
      </div>

      {isSuccess && data ? (
        <S.ContainerConfirm>
          <S.Overlay onClick={closeOverlay} />
          <S.SidebarConfirm>
            <h3>Pedido realizado - Nº: {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>

            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>

            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>

            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button to="/" type="link" title="clique aqui para concluir">
              Concluir
            </Button>
          </S.SidebarConfirm>
        </S.ContainerConfirm>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.ContainerCard className={address ? "is-openCard" : ""}>
            <S.Overlay onClick={closeOverlay} />
            <S.SidebarCard>
              <h3>Entrega</h3>
              <S.Row>
                <S.inputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("fullName") ? "error" : ""}
                  />
                </S.inputGroup>
                <S.inputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("address") ? "error" : ""}
                  />
                </S.inputGroup>
                <S.inputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("city") ? "error" : ""}
                  />
                </S.inputGroup>
              </S.Row>
              <S.RowFlex>
                <S.inputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("zipCode") ? "error" : ""}
                    mask="99.999-999"
                  />
                </S.inputGroup>
                <S.inputGroup>
                  <label htmlFor="numberHouse">Número</label>
                  <InputMask
                    id="numberHouse"
                    type="text"
                    name="numberHouse"
                    value={form.values.numberHouse}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("numberHouse") ? "error" : ""}
                    mask="9999"
                  />
                </S.inputGroup>
              </S.RowFlex>
              <S.inputGroup>
                <label className="custom-label" htmlFor="complement">
                  Complemento (opcional)
                </label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("complement") ? "error" : ""}
                />
              </S.inputGroup>
            </S.SidebarCard>
            <S.ContainerButton>
              <button onClick={openPayment} type="button" title="clique aqui">
                Continuar para pagamento
              </button>
              <button onClick={backCart} type="button" title="clique aqui">
                Voltar ao carrinho
              </button>
            </S.ContainerButton>
          </S.ContainerCard>

          <S.ContainerPay className={payment ? "is-openPay" : ""}>
            <S.Overlay onClick={closeOverlay} />
            <S.Sidebar>
              <h3>Pagamento - Valor a pagar {parseToBrl(getTotalPrices())}</h3>
              <S.Row>
                <S.inputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    id="cardOwner"
                    type="text"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardOwner") ? "error" : ""}
                  />
                </S.inputGroup>
                <S.RowFlex>
                  <S.inputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("cardNumber") ? "error" : ""
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.inputGroup>
                  <S.inputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("cardCode") ? "error" : ""}
                      mask="999"
                    />
                  </S.inputGroup>
                </S.RowFlex>
              </S.Row>
              <S.RowFlex>
                <S.inputGroup>
                  <label htmlFor="expiresMonth">Mês Vencimento</label>
                  <InputMask
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError("expiresMonth") ? "error" : ""
                    }
                    mask="99"
                  />
                </S.inputGroup>
                <S.inputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("expiresYear") ? "error" : ""}
                    mask="99"
                  />
                </S.inputGroup>
              </S.RowFlex>
            </S.Sidebar>
            <S.ContainerButton>
              <Button
                type="submit"
                onClick={form.handleSubmit}
                title="clique aqui para finalizar a compra"
                disabled={isLoading}
              >
                {isLoading ? "Finalizando pagamento..." : "Finalizar pagamento"}
              </Button>
              <button onClick={backAdress} type="button" title="clique aqui">
                Voltar para a edição do endereço
              </button>
            </S.ContainerButton>
          </S.ContainerPay>
        </form>
      )}
    </>
  );
};
export default Cart;

import { PaymentMethodContainer, RadioInputContainer, TitleContainer } from "./styles";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

export default function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <TitleContainer>
        <CurrencyDollar size={22} />
        <div>
          <h2>Pagamento</h2>
          <h3>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h3>
        </div>
      </TitleContainer>
      <RadioInputContainer>
        <input type="radio" name="PaymentMethod" id="creditCard" value="creditCard" />
        <label htmlFor="creditCard">
          <CreditCard size={16}/>
          <span>CARTÃO DE CRÉDITO</span>
        </label>
        <input type="radio" name="PaymentMethod" id="debitCard" value="debitCard"/>
        <label htmlFor="debitCard">
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </label>
        <input type="radio" name="PaymentMethod" id="cash" value="cash"/>
        <label htmlFor="cash">
          <Money size={16} />
          <span>DINHEIRO</span>
        </label>
      </RadioInputContainer>
    </PaymentMethodContainer>
  );

}
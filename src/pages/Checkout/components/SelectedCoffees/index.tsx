import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import Coffee from "./components/Coffee";
import { InfoContainer, SelectedCoffeesContainer } from "./styles";
import { formatPrice } from "../../../../helper/formatPrice";
import EmptyCart from "./components/EmptyCart";


export default function SelectedCoffees() {
  
  const { cart, setCoffeeAmount } = useContext(CartContext);
  const coffeePriceSum = cart.reduce((accumulator, coffee) => accumulator + coffee.basePrice*coffee.amount, 0);
  const totalPrice = coffeePriceSum + 3.5;
  const currentCart = cart.filter((coffee) => coffee.amount !== 0 )
  const isDisabled = currentCart.length === 0;

  return (
    <SelectedCoffeesContainer>
      <section>
        {
          currentCart.length 
      ? currentCart.map((coffee) => (
          <Coffee 
            key={coffee.id}
            id={coffee.id}
            image={coffee.image}
            name={coffee.name}
            basePrice={coffee.basePrice}
            amount={coffee.amount}
            setCoffeeAmount={setCoffeeAmount}
          />
        ))
            : <EmptyCart />
        }
      </section>
      <InfoContainer>
        <div>
          <span>Total de Itens</span>
          <span>R$ {formatPrice(coffeePriceSum)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ {formatPrice(totalPrice)}</span>
        </div>
      </InfoContainer>
      <input type="submit" value="CONFIRMAR PEDIDO" disabled={isDisabled} />
    </SelectedCoffeesContainer>
  );
}
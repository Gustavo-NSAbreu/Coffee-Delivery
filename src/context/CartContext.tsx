import { ReactNode, createContext, useState } from "react";
import { coffees } from "../../Coffee/data";

interface Cart {
  id: string;
  image: string;
  name: string;
  basePrice: number;
  amount: number;
}
interface CartContextData {
  cart: Cart[];
  totalAmount: number;
  setCoffeeAmount: (id: string, amount: number) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

const defaultCart: Cart[] = coffees.map((coffee) => {  
  return {
      id: coffee.id,
      image: coffee.image,
      name: coffee.name,
      basePrice: coffee.price, 
      amount: 0
  } as Cart
});

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>(defaultCart);

  const [totalAmount, setTotalAmount] = useState(0);

  function setCoffeeAmount(id: string, amount: number) {
    const newCart = cart.map((coffee) => {
      if (coffee.id === id) {
        return {
          ...coffee,
          amount: coffee.amount + amount >= 0 ? coffee.amount + amount : coffee.amount,
        }
      }
      
      return coffee;
    });
    
    setTotalAmount(newCart.reduce((accumulator, coffee) => accumulator + coffee.amount, 0));
    setCart(newCart);
  }

  return (
    <CartContext.Provider 
      value={{
        cart,
        totalAmount,
        setCoffeeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
} 
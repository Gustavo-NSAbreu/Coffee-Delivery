import {  useState } from "react";
import NumberInput from "../../../../components/NumberInput";
import { CoffeeContainer, MainCardSection, MiddleSection, PriceTag, RemoveButton } from "./styles";
import { Trash } from "phosphor-react";
import { formatPrice } from "../../../../helper/formatPrice";

interface CoffeeProps {
  id: string;
  image: string;
  name: string;
  basePrice: number;
  amount: number;
  setCoffeeAmount: (id: string, amount: number) => void;
}

export default function Coffee( { id, image, name, basePrice, amount, setCoffeeAmount}: CoffeeProps) {
  
  const [amountToRemove, setAmountToRemove] = useState(1);   

  const totalPrice = basePrice*amount;

  function handleRemoveCoffee(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCoffeeAmount(id, -amountToRemove);
    setAmountToRemove(1);
  }

  let fixedAmountToRemove = amountToRemove > amount ? amount : amountToRemove
  
  return (
    <>
      <CoffeeContainer>
        <MainCardSection>
          <img src={image} />
          <MiddleSection>
            <span>{name}</span>
            <div>
              <NumberInput size="small" amount={fixedAmountToRemove} setAmount={setAmountToRemove} />
              <RemoveButton onClick={handleRemoveCoffee}>
                <Trash />
                <span>REMOVER</span>
              </RemoveButton>
            </div>
          </MiddleSection>
        </MainCardSection>
        <PriceTag>R$ {formatPrice(totalPrice)}</PriceTag>
      </CoffeeContainer>
      <hr />
    </>
  );
}
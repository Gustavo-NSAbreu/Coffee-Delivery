import { ShoppingCart } from "phosphor-react";
import { Tag } from "../../../../../../../Coffee/data";
import NumberInput from "../../../../../../components/NumberInput";
import { AddToCartButton, CoffeeContainer, TagsContainer, PriceTag } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../../../../../context/CartContext";
import { formatPrice } from "../../../../../../helper/formatPrice";


interface CoffeeProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  tags: Tag[];
}

export default function Coffee({ id, image, name, description, price, tags }: CoffeeProps) {

  const { setCoffeeAmount } = useContext(CartContext);

  const [amount, setAmount] = useState(1);

  function setCoffeeAmountInCart() {
    setCoffeeAmount(id, amount);
  }
  
  return (
    <CoffeeContainer>
      <img src={image} />
      <TagsContainer>
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </TagsContainer>
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <PriceTag>
          {formatPrice(price, 3)}
        </PriceTag>
        <div>
          <NumberInput size="large" amount={amount} setAmount={setAmount} />
          <AddToCartButton onClick={setCoffeeAmountInCart}>
            <ShoppingCart weight="fill" size={22} />
          </AddToCartButton>
        </div>
      </div>
    </CoffeeContainer>
  );
}
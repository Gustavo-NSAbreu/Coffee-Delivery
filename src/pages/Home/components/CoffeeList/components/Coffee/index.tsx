import { ShoppingCart } from "phosphor-react";
import { Tag } from "../../../../../../../Coffee/data";
import NumberInput from "../../../../../../components/NumberInput";
import { CoffeeContainer, TagsContainer } from "./styles";

interface CoffeeProps {
  image: string;
  name: string;
  description: string;
  price: number;
  tags: Tag[];
}

export default function Coffee({ image, name, description, price, tags }: CoffeeProps) {

  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return (
    <CoffeeContainer>
      <img src={image} />
      <TagsContainer>
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </TagsContainer>
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <span>{formatedPrice}</span>
        <div>
          <NumberInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </div>
      </div>
    </CoffeeContainer>
  );
}
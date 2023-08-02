import {coffees} from "../../../../../Coffee/data";
import Coffee from "./components/Coffee";
import { CoffeeGrid, CoffeeListContainer } from "./styles";

export default function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <CoffeeGrid>
        {coffees
          .map((coffee) => 
            <Coffee 
              key={coffee.id} 
              image={coffee.image}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              tags={coffee.tags}
            />
          )
        }
      </CoffeeGrid>
    </CoffeeListContainer>
  );
}
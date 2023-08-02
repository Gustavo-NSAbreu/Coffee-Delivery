import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { ServiceDescription, FirstServiceTopic, ThirdServiceTopic, SecondServiceTopic, FourthServiceTopic, TitleSection, TitleContainer } from "./styles";
import CoffeeCup from "../../../../assets/coffeeCup.svg";


export default function Title() {
  return (
    <TitleContainer>
      <div>
        <TitleSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </TitleSection>
        <ServiceDescription>
          <div>
            <FirstServiceTopic>
              <div>
                <ShoppingCart size={16} weight="fill"/>
              </div>
              <p>
                Compra simples e segura
              </p>
            </FirstServiceTopic>
            <ThirdServiceTopic>
              <div>
                <Package size={16} weight="fill"/>
              </div>
              <p>
                Entrega rápida e rastraeda
              </p>
            </ThirdServiceTopic>
          </div>
          <div>
            <SecondServiceTopic>
              <div>
                <Timer size={16} weight="fill"/>
              </div>
              <p>
                Embalagem mantém o café intacto									
              </p>
            </SecondServiceTopic>
            <FourthServiceTopic>
              <div>
                <Coffee size={16} weight="fill"/>
              </div>
              <p>
                O café chega fresquinho até você
              </p>
            </FourthServiceTopic>
          </div>
        </ServiceDescription>
      </div>
      <img src={CoffeeCup}/>
    </TitleContainer>
  );
}
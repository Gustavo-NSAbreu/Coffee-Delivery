import { EmptyCartContainer } from "./styles";

export default function EmptyCart() {
  return (
    <EmptyCartContainer>
      <div>
        <h3>Seu carrinho está vazio</h3>
        <p>Adicione itens para continuar</p>
      </div>
      <hr />
    </EmptyCartContainer>
  )

}
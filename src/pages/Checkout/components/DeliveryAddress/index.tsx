import { MapPinLine } from "phosphor-react";
import { AddressFormContainer, AddressInput, BaseInput, CityInput, ComplementInput, DeliveryAddressContainer, StateInput, TitleContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


const deliveryAddressFormValidationSchema = zod.object({
  cep: zod.string().length(8, "O CEP deve ter 8 dígitos").nonempty("O CEP é obrigatório"),
  street: zod.string().nonempty("A rua é obrigatória"),
  number: zod.string().nonempty("O número é obrigatório"),
  complement: zod.string(),
  neighborhood: zod.string().nonempty("O bairro é obrigatório"),
  city: zod.string().nonempty("A cidade é obrigatória"),
  state: zod.string().length(2, 'A sigla do estado deve ter 2 letras').nonempty("O estado é obrigatório"),
})

type DeliveryAddressFormData = zod.infer<typeof deliveryAddressFormValidationSchema>

export default function DeliveryAddress() {

  const deliveryAddressForm = useForm<DeliveryAddressFormData>({
    resolver: zodResolver(deliveryAddressFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    }
  });

  return (
    <DeliveryAddressContainer>
      <TitleContainer>
        <MapPinLine size={22} />
        <div>
          <h2>Endereço de Entrega</h2>
          <h3>Informe o endereço onde deseja receber seu pedido</h3>
        </div>
      </TitleContainer>
      <AddressFormContainer>
        <BaseInput type="text" placeholder="CEP" />
        <AddressInput type="text" placeholder="Rua" />
        <div>
          <BaseInput type="text" placeholder="Número" />
          <ComplementInput type="text" placeholder="Complemento"/>
        </div>
        <div>
          <BaseInput type="text" placeholder="Bairro" />
          <CityInput type="text" placeholder="Cidade" />
          <StateInput type="text" placeholder="UF" />
        </div>
      </AddressFormContainer>
    </DeliveryAddressContainer>
  );
}
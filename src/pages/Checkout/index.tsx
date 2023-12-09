import DeliveryAddress from "./components/DeliveryAddress";
import PaymentMethod from "./components/PaymentMethod";
import SelectedCoffees from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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



export default function Checkout() {

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

	const { handleSubmit } = deliveryAddressForm;

	function handleDeliveryAddressForm() {
		
	}

	return (
		<CheckoutContainer onSubmit={handleSubmit(handleDeliveryAddressForm)} >
			<div>
				<section>
					<h1>Complete seu pedido</h1>
					<DeliveryAddress />
				</section>
				<section>
					<PaymentMethod />
				</section>
			</div>
			<section>
				<h1>Cafés Selecionados</h1>
				<SelectedCoffees />
			</section>
		</CheckoutContainer>
	);
}

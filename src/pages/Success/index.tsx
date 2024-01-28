import { useContext } from "react";
import { CheckoutContext, PaymentMethodLabels } from "../../context/CheckoutContext";
import { formatAddress } from "../../helper/formatAddress"

export default function Success() {
	const { deliveryAddress, paymentMethod} = useContext(CheckoutContext);

	const {streetAndNumber, region} = formatAddress(deliveryAddress);
	const formattedPayment = PaymentMethodLabels[paymentMethod as keyof typeof PaymentMethodLabels];

	return (
		<div>
			<div>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>
			</div>
			<div>
				<div>
					<div>
						icon
						<p>Entrega em <strong>{streetAndNumber}</strong></p>
						<p>{region}</p>
					</div>
					<div>
						icon
						<p>Previsão de entrega</p>
						<p>20 min - 30 min</p>
					</div>
					<div>
						icon
						<p>Pagamento na entrega</p>
						<p>{formattedPayment}</p>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

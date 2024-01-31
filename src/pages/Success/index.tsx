import { useContext, useEffect } from "react";
import { CheckoutContext, PaymentMethodLabels } from "../../context/CheckoutContext";
import { formatAddress } from "../../helper/formatAddress"
import { useNavigate } from "react-router-dom";
import { routes } from "../../config/config";
import deliveryImage from '../../assets/delivery.png';
import {CurrencyDollar, MapPin, Timer} from 'phosphor-react';
import { AddressTopic, DeliveryImage, InformationContainer, PaymentTopic, SuccessContainer, TimeTopic } from "./styles";

export default function Success() {

	const navigate = useNavigate();
	const { deliveryAddress, paymentMethod} = useContext(CheckoutContext);
	const {streetAndNumber, region} = formatAddress(deliveryAddress);
	const formattedPayment = PaymentMethodLabels[paymentMethod as keyof typeof PaymentMethodLabels];

	useEffect(() => {
		const isDeliveryAddressEmpty = Object.values(deliveryAddress).every(x => !x); 
		if (isDeliveryAddressEmpty || !paymentMethod) {
			navigate(routes.CHECKOUT);
		}
	}, [])



	return (
		<SuccessContainer>
			<div>
				<h1>Uhu! Pedido confirmado</h1>
				<h2>Agora é só aguardar que logo o café chegará até você</h2>
			</div>
			<InformationContainer>
				<div>
					<AddressTopic>
						<div>
							<MapPin size={16} weight="fill"/>
						</div>
						<div>
							<p>Entrega em <strong>{streetAndNumber}</strong></p>
							<p>{region}</p>
						</div>
					</AddressTopic>
					<TimeTopic>
						<div>
							<Timer size={16} weight="fill"/>
						</div>
						<div>
							<p>Previsão de entrega</p>
							<p><strong>20 min - 30 min</strong></p>
						</div>
					</TimeTopic>
					<PaymentTopic>
						<div>
							<CurrencyDollar size={16} weight="fill"/>
						</div>
						<div>
							<p>Pagamento na entrega</p>
							<p><strong>{formattedPayment}</strong></p>
						</div>
					</PaymentTopic>
				</div>
				<DeliveryImage>
					<img src={deliveryImage} alt="Delivery" />
				</DeliveryImage>
			</InformationContainer>
		</SuccessContainer>
	);
}

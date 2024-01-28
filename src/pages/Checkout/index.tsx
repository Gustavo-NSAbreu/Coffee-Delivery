import { useContext } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	AddressFormContainer,
	AddressInput,
	BaseInput,
	CheckoutContainer,
	CityInput,
	ComplementInput,
	DeliveryAddressContainer,
	DeliveryAddressTitleContainer,
	InfoContainer,
	PaymentMethodContainer,
	PaymentMethodTitleContainer,
	RadioInputContainer,
	SelectedCoffeesContainer,
	StateInput,
} from './styles';
import { useForm } from 'react-hook-form';
import Coffee from './components/Coffee';
import EmptyCart from './components/EmptyCart';
import { CartContext } from '../../context/CartContext';
import { formatPrice } from '../../helper/formatPrice';
import {
	MapPinLine,
	CurrencyDollar,
	CreditCard,
	Bank,
	Money,
} from 'phosphor-react';
import { CheckoutContext, PaymentMethod } from '../../context/CheckoutContext';
import { useNavigate } from 'react-router-dom';

const deliveryAddressFormValidationSchema = zod.object({
	cep: zod
		.string()
		.length(8, 'O CEP deve ter 8 dígitos')
		.nonempty('O CEP é obrigatório'),
	street: zod.string().nonempty('A rua é obrigatória'),
	number: zod.string().nonempty('O número é obrigatório'),
	complement: zod.string(),
	neighborhood: zod.string().nonempty('O bairro é obrigatório'),
	city: zod.string().nonempty('A cidade é obrigatória'),
	state: zod
		.string()
		.length(2, 'A sigla do estado deve ter 2 letras')
		.nonempty('O estado é obrigatório'),
	paymentMethod: zod.union([
		zod.literal('creditCard'),
		zod.literal('debitCard'),
		zod.literal('cash'),
	]) as zod.ZodType<PaymentMethod, any, any>,
});

type DeliveryAddressFormData = zod.infer<
	typeof deliveryAddressFormValidationSchema
>;

export default function Checkout() {
	const deliveryAddressForm = useForm<DeliveryAddressFormData>({
		resolver: zodResolver(deliveryAddressFormValidationSchema),
		defaultValues: {
			cep: '',
			street: '',
			number: '',
			complement: '',
			neighborhood: '',
			city: '',
			state: '',
			paymentMethod: undefined,
		},
	});

	const { cart, setCoffeeAmount } = useContext(CartContext);
	const coffeePriceSum = cart.reduce(
		(accumulator, coffee) => accumulator + coffee.basePrice * coffee.amount,
		0,
	);
	const totalPrice = coffeePriceSum + 3.5;
	const currentCart = cart.filter((coffee) => coffee.amount !== 0);
	const isDisabled = currentCart.length === 0;

	const { handleSubmit, reset, register } = deliveryAddressForm;

	const { setAddress, setPayment } = useContext(CheckoutContext);
	const navigate = useNavigate();

	function handleDeliveryAddressForm(data: DeliveryAddressFormData) {
		console.log(data);
		const {
			cep,
			street,
			number,
			complement,
			neighborhood,
			city,
			state,
			paymentMethod,
		} = data;
		const address = {
			cep,
			street,
			number,
			complement,
			neighborhood,
			city,
			state,
		};
		setAddress(address);
		setPayment(paymentMethod);
		reset();
		navigate('/confirmedOrder');
	}

	return (
		<CheckoutContainer onSubmit={handleSubmit(handleDeliveryAddressForm)}>
			<div>
				<section>
					<h1>Complete seu pedido</h1>
					<DeliveryAddressContainer>
						<DeliveryAddressTitleContainer>
							<MapPinLine size={22} />
							<div>
								<h2>Endereço de Entrega</h2>
								<h3>Informe o endereço onde deseja receber seu pedido</h3>
							</div>
						</DeliveryAddressTitleContainer>
						<AddressFormContainer>
							<BaseInput
								type='text'
								placeholder='CEP'
								{...register('cep')}
							/>
							<AddressInput
								type='text'
								placeholder='Rua'
								{...register('street')}
							/>
							<div>
								<BaseInput
									type='text'
									placeholder='Número'
									{...register('number')}
								/>
								<ComplementInput
									type='text'
									placeholder='Complemento'
									{...register('complement')}
								/>
							</div>
							<div>
								<BaseInput
									type='text'
									placeholder='Bairro'
									{...register('neighborhood')}
								/>
								<CityInput
									type='text'
									placeholder='Cidade'
									{...register('city')}
								/>
								<StateInput
									type='text'
									placeholder='UF'
									{...register('state')}
								/>
							</div>
						</AddressFormContainer>
					</DeliveryAddressContainer>
				</section>
				<section>
					<PaymentMethodContainer>
						<PaymentMethodTitleContainer>
							<CurrencyDollar size={22} />
							<div>
								<h2>Pagamento</h2>
								<h3>
									O pagamento é feito na entrega. Escolha a forma que deseja
									pagar
								</h3>
							</div>
						</PaymentMethodTitleContainer>
						<RadioInputContainer>
							<input
								type='radio'
								{...register('paymentMethod')}
								id='creditCard'
								value='creditCard'
							/>
							<label htmlFor='creditCard'>
								<CreditCard size={16} />
								<span>CARTÃO DE CRÉDITO</span>
							</label>
							<input
								type='radio'
								{...register('paymentMethod')}
								id='debitCard'
								value='debitCard'
							/>
							<label htmlFor='debitCard'>
								<Bank size={16} />
								<span>CARTÃO DE DÉBITO</span>
							</label>
							<input
								type='radio'
								{...register('paymentMethod')}
								id='cash'
								value='cash'
							/>
							<label htmlFor='cash'>
								<Money size={16} />
								<span>DINHEIRO</span>
							</label>
						</RadioInputContainer>
					</PaymentMethodContainer>
				</section>
			</div>
			<section>
				<h1>Cafés Selecionados</h1>
				<SelectedCoffeesContainer>
					<section>
						{currentCart.length ? (
							currentCart.map((coffee) => (
								<Coffee
									key={coffee.id}
									id={coffee.id}
									image={coffee.image}
									name={coffee.name}
									basePrice={coffee.basePrice}
									amount={coffee.amount}
									setCoffeeAmount={setCoffeeAmount}
								/>
							))
						) : (
							<EmptyCart />
						)}
					</section>
					<InfoContainer>
						<div>
							<span>Total de Itens</span>
							<span>R$ {formatPrice(coffeePriceSum)}</span>
						</div>
						<div>
							<span>Entrega</span>
							<span>R$ 3,50</span>
						</div>
						<div>
							<span>Total</span>
							<span>R$ {formatPrice(totalPrice)}</span>
						</div>
					</InfoContainer>
					<input
						type='submit'
						value='CONFIRMAR PEDIDO'
						disabled={isDisabled}
					/>
				</SelectedCoffeesContainer>
			</section>
		</CheckoutContainer>
	);
}

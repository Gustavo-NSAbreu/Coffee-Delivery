import { ReactNode, createContext, useState } from "react";

interface DeliveryAddress {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

interface PaymentMethod {
  type: 'creditCard' | 'debitCard' | 'cash';
}

interface CheckoutContextData {
  deliveryAddress: DeliveryAddress;
  paymentMethod: PaymentMethod;
  setAddress: (deliveryAddress: DeliveryAddress) => void;
  setPayment: (paymentMethod: PaymentMethod) => void;
}

export const CheckoutContext = createContext({} as CheckoutContextData);

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export default function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
  
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({} as DeliveryAddress);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({} as PaymentMethod);
  
  function setAddress(deliveryAddress: DeliveryAddress) {
    setDeliveryAddress(deliveryAddress);
  }

  function setPayment(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod);
  }

  return (
    <CheckoutContext.Provider 
      value={{
        deliveryAddress,
        paymentMethod,
        setAddress,
        setPayment,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
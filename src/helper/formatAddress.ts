import { DeliveryAddress } from "../context/CheckoutContext";

interface FormattedAddress {
  streetAndNumber: string;
  region: string;
}

export function formatAddress(address: DeliveryAddress): FormattedAddress {
  return {
    streetAndNumber: `${address.street}, ${address.number}`,
    region: `${address.neighborhood} - ${address.city}, ${address.state}`}
}
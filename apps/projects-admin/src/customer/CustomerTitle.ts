import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "contactme";

export const CustomerTitle = (record: TCustomer): string => {
  return record.contactme?.toString() || String(record.id);
};

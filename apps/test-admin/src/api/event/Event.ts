import { Customer } from "../customer/Customer";

export type Event = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};

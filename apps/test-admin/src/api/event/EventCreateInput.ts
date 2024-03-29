import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
};

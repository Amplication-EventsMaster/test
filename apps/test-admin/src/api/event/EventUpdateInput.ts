import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
};

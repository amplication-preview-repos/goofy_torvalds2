import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  auction?: AuctionWhereUniqueInput;
  buyer?: StringNullableFilter;
  buyerUser?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
  paymentStatus?: StringNullableFilter;
};

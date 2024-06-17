import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BidWhereInput = {
  amount?: FloatNullableFilter;
  auction?: AuctionWhereUniqueInput;
  bidder?: StringNullableFilter;
  bidderUser?: StringNullableFilter;
  id?: StringFilter;
};

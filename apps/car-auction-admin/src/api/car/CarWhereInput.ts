import { AuctionListRelationFilter } from "../auction/AuctionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CarWhereInput = {
  auctions?: AuctionListRelationFilter;
  id?: StringFilter;
  make?: StringNullableFilter;
  mileage?: IntNullableFilter;
  model?: StringNullableFilter;
  seller?: StringNullableFilter;
  sellerUser?: StringNullableFilter;
  startingBid?: FloatNullableFilter;
  year?: IntNullableFilter;
};

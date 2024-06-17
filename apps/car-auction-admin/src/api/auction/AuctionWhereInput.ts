import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AuctionWhereInput = {
  bids?: BidListRelationFilter;
  car?: CarWhereUniqueInput;
  currentBid?: FloatNullableFilter;
  endTime?: DateTimeNullableFilter;
  highestBidder?: StringNullableFilter;
  highestBidderUser?: StringNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  transactions?: TransactionListRelationFilter;
};

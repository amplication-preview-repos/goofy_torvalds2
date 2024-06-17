import { BidCreateNestedManyWithoutAuctionsInput } from "./BidCreateNestedManyWithoutAuctionsInput";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAuctionsInput } from "./TransactionCreateNestedManyWithoutAuctionsInput";

export type AuctionCreateInput = {
  bids?: BidCreateNestedManyWithoutAuctionsInput;
  car?: CarWhereUniqueInput | null;
  currentBid?: number | null;
  endTime?: Date | null;
  highestBidder?: string | null;
  highestBidderUser?: string | null;
  startTime?: Date | null;
  transactions?: TransactionCreateNestedManyWithoutAuctionsInput;
};

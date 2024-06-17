import { BidUpdateManyWithoutAuctionsInput } from "./BidUpdateManyWithoutAuctionsInput";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { TransactionUpdateManyWithoutAuctionsInput } from "./TransactionUpdateManyWithoutAuctionsInput";

export type AuctionUpdateInput = {
  bids?: BidUpdateManyWithoutAuctionsInput;
  car?: CarWhereUniqueInput | null;
  currentBid?: number | null;
  endTime?: Date | null;
  highestBidder?: string | null;
  highestBidderUser?: string | null;
  startTime?: Date | null;
  transactions?: TransactionUpdateManyWithoutAuctionsInput;
};

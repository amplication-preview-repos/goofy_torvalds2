import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";

export type BidUpdateInput = {
  amount?: number | null;
  auction?: AuctionWhereUniqueInput | null;
  bidder?: string | null;
  bidderUser?: string | null;
};

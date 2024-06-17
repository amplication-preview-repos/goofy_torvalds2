import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";

export type BidCreateInput = {
  amount?: number | null;
  auction?: AuctionWhereUniqueInput | null;
  bidder?: string | null;
  bidderUser?: string | null;
};

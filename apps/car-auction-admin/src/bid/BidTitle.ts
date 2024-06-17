import { Bid as TBid } from "../api/bid/Bid";

export const BID_TITLE_FIELD = "bidder";

export const BidTitle = (record: TBid): string => {
  return record.bidder?.toString() || String(record.id);
};

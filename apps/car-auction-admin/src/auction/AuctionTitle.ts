import { Auction as TAuction } from "../api/auction/Auction";

export const AUCTION_TITLE_FIELD = "highestBidder";

export const AuctionTitle = (record: TAuction): string => {
  return record.highestBidder?.toString() || String(record.id);
};

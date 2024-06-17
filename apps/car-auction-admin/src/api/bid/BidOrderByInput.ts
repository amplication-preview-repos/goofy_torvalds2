import { SortOrder } from "../../util/SortOrder";

export type BidOrderByInput = {
  amount?: SortOrder;
  auctionId?: SortOrder;
  bidder?: SortOrder;
  bidderUser?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

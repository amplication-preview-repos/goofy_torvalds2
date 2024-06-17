import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  auctionId?: SortOrder;
  buyer?: SortOrder;
  buyerUser?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  paymentStatus?: SortOrder;
  updatedAt?: SortOrder;
};

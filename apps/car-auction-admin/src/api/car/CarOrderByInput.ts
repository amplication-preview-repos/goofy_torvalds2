import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  mileage?: SortOrder;
  model?: SortOrder;
  seller?: SortOrder;
  sellerUser?: SortOrder;
  startingBid?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};

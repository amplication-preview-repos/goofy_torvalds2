import { AuctionCreateNestedManyWithoutCarsInput } from "./AuctionCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  auctions?: AuctionCreateNestedManyWithoutCarsInput;
  make?: string | null;
  mileage?: number | null;
  model?: string | null;
  seller?: string | null;
  sellerUser?: string | null;
  startingBid?: number | null;
  year?: number | null;
};

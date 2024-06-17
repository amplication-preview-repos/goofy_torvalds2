import { AuctionUpdateManyWithoutCarsInput } from "./AuctionUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  auctions?: AuctionUpdateManyWithoutCarsInput;
  make?: string | null;
  mileage?: number | null;
  model?: string | null;
  seller?: string | null;
  sellerUser?: string | null;
  startingBid?: number | null;
  year?: number | null;
};

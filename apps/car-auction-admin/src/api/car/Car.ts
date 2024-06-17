import { Auction } from "../auction/Auction";

export type Car = {
  auctions?: Array<Auction>;
  createdAt: Date;
  id: string;
  make: string | null;
  mileage: number | null;
  model: string | null;
  seller: string | null;
  sellerUser: string | null;
  startingBid: number | null;
  updatedAt: Date;
  year: number | null;
};

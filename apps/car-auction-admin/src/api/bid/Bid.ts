import { Auction } from "../auction/Auction";

export type Bid = {
  amount: number | null;
  auction?: Auction | null;
  bidder: string | null;
  bidderUser: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};

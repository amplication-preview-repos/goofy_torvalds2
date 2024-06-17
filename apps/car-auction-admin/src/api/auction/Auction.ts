import { Bid } from "../bid/Bid";
import { Car } from "../car/Car";
import { Transaction } from "../transaction/Transaction";

export type Auction = {
  bids?: Array<Bid>;
  car?: Car | null;
  createdAt: Date;
  currentBid: number | null;
  endTime: Date | null;
  highestBidder: string | null;
  highestBidderUser: string | null;
  id: string;
  startTime: Date | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};

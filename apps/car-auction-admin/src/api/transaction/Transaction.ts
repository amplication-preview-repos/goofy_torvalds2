import { Auction } from "../auction/Auction";

export type Transaction = {
  amount: number | null;
  auction?: Auction | null;
  buyer: string | null;
  buyerUser: string | null;
  createdAt: Date;
  id: string;
  paymentMethod: string | null;
  paymentStatus: string | null;
  updatedAt: Date;
};

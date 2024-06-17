import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  auction?: AuctionWhereUniqueInput | null;
  buyer?: string | null;
  buyerUser?: string | null;
  paymentMethod?: string | null;
  paymentStatus?: string | null;
};

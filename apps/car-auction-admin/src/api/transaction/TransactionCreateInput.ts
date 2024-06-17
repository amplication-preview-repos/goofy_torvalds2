import { AuctionWhereUniqueInput } from "../auction/AuctionWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  auction?: AuctionWhereUniqueInput | null;
  buyer?: string | null;
  buyerUser?: string | null;
  paymentMethod?: string | null;
  paymentStatus?: string | null;
};

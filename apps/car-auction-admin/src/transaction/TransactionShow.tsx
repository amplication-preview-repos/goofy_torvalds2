import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { AUCTION_TITLE_FIELD } from "../auction/AuctionTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <ReferenceField label="auction" source="auction.id" reference="Auction">
          <TextField source={AUCTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="buyer" source="buyer" />
        <TextField label="buyerUser" source="buyerUser" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="paymentMethod" source="paymentMethod" />
        <TextField label="paymentStatus" source="paymentStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

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

export const BidShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <ReferenceField label="auction" source="auction.id" reference="Auction">
          <TextField source={AUCTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="bidder" source="bidder" />
        <TextField label="bidderUser" source="bidderUser" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

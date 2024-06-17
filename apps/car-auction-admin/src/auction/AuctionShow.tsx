import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AUCTION_TITLE_FIELD } from "./AuctionTitle";
import { CAR_TITLE_FIELD } from "../car/CarTitle";

export const AuctionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="car" source="car.id" reference="Car">
          <TextField source={CAR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentBid" source="currentBid" />
        <TextField label="endTime" source="endTime" />
        <TextField label="highestBidder" source="highestBidder" />
        <TextField label="highestBidderUser" source="highestBidderUser" />
        <TextField label="ID" source="id" />
        <TextField label="startTime" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bid" target="auctionId" label="Bids">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="auction"
              source="auction.id"
              reference="Auction"
            >
              <TextField source={AUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="bidder" source="bidder" />
            <TextField label="bidderUser" source="bidderUser" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="auctionId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="auction"
              source="auction.id"
              reference="Auction"
            >
              <TextField source={AUCTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="buyer" source="buyer" />
            <TextField label="buyerUser" source="buyerUser" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="paymentMethod" source="paymentMethod" />
            <TextField label="paymentStatus" source="paymentStatus" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

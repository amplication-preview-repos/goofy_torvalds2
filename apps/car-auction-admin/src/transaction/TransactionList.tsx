import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AUCTION_TITLE_FIELD } from "../auction/AuctionTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

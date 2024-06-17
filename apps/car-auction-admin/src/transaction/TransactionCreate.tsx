import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AuctionTitle } from "../auction/AuctionTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="auction.id" reference="Auction" label="auction">
          <SelectInput optionText={AuctionTitle} />
        </ReferenceInput>
        <TextInput label="buyer" source="buyer" />
        <TextInput label="buyerUser" source="buyerUser" />
        <TextInput label="paymentMethod" source="paymentMethod" />
        <TextInput label="paymentStatus" source="paymentStatus" />
      </SimpleForm>
    </Create>
  );
};

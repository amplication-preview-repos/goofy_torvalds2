import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AuctionTitle } from "../auction/AuctionTitle";

export const BidEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="auction.id" reference="Auction" label="auction">
          <SelectInput optionText={AuctionTitle} />
        </ReferenceInput>
        <TextInput label="bidder" source="bidder" />
        <TextInput label="bidderUser" source="bidderUser" />
      </SimpleForm>
    </Edit>
  );
};

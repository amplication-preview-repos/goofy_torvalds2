import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BidTitle } from "../bid/BidTitle";
import { CarTitle } from "../car/CarTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const AuctionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bids"
          reference="Bid"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BidTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="car.id" reference="Car" label="car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <NumberInput label="currentBid" source="currentBid" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="highestBidder" source="highestBidder" />
        <TextInput label="highestBidderUser" source="highestBidderUser" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

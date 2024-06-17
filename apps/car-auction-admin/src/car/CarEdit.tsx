import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AuctionTitle } from "../auction/AuctionTitle";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="auctions"
          reference="Auction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AuctionTitle} />
        </ReferenceArrayInput>
        <TextInput label="make" source="make" />
        <NumberInput step={1} label="mileage" source="mileage" />
        <TextInput label="model" source="model" />
        <TextInput label="seller" source="seller" />
        <TextInput label="sellerUser" source="sellerUser" />
        <NumberInput label="startingBid" source="startingBid" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
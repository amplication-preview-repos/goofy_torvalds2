import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="make" source="make" />
        <TextField label="mileage" source="mileage" />
        <TextField label="model" source="model" />
        <TextField label="seller" source="seller" />
        <TextField label="sellerUser" source="sellerUser" />
        <TextField label="startingBid" source="startingBid" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
      </Datagrid>
    </List>
  );
};

import React from "react";
import Navi from "./Navi";
import Categories from "./Categories";
import CarList from "../pages/CarList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <CarList />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

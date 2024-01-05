import React from "react";
import Categories from "./Categories";
import CarList from "../pages/CarList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import CarDetail from "../pages/CarDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/" element={<CarList />} />
              <Route exact path="/cars" element={<CarList />} />
              <Route path="/cars/:id" element={<CarDetail />} />
              <Route path="/cart" element={<CartDetail />} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

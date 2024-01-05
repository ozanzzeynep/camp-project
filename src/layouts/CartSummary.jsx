import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem, Label } from "semantic-ui-react";
import { cartItems } from "../store/initialValues/cartItems";


export default function CartSummary() {
  let newData = cartItems;
  newData= useSelector((state) => state.carts);

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <DropdownItem>
            {newData.map((cart, id) => {
              return <li key={id}>{cart.id} ' Nolu Araba"</li>;
            })}
          </DropdownItem>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

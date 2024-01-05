import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItems } from "../store/initialValues/cartItems";
 

export default function Navi() {
  let newData = cartItems;
  newData= useSelector((state) => state.carts);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  function handleSignOut() {
    setIsAuthenticated(false);
    handleClick();
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {newData.length> 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut singIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

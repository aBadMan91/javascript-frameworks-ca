import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, NavContainer } from "./index.styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>North Store</h1>
      </Link>
      <NavContainer>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </NavContainer>
    </HeaderContainer>
  );
}

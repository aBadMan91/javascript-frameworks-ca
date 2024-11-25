import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, NavContainer } from "./index.styles";
import { SearchBar } from "../../SearchBar";
import { CartIcon } from "../../CartIcon";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>North Store</h1>
      </Link>
      <SearchBar />
      <NavContainer>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/checkout">
          <CartIcon />
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
}

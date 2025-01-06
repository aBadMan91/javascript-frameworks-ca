import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, NavContainer, HamburgerMenu } from "./index.styles";
import { SearchBar } from "../../SearchBar";
import { CartIcon } from "../../CartIcon";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <h1>North Store</h1>
      </Link>
      <HamburgerMenu onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
      <NavContainer isOpen={isOpen}>
        <SearchBar />
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
}

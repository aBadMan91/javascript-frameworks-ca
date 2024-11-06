import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: #0e2f35;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    cursor: pointer;
  }
`;

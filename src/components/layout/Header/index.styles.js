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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #0e2f35;
    padding: 10px;
    width: 25%;
  }

  a {
    margin: 6px;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 35px;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin: 3px 0;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

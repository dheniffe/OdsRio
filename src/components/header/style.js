import styled from "styled-components/macro";

export const Header = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  color: #fff;
  background-color: #0aa466;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const Logo = styled.img`
  width: 3rem;
`

export const NavBar = styled.nav`
  list-style: none;
  display: flex;
  gap: 4rem;

  @media (max-width: 1000px) {
    ${({ isMenuOpen }) => `${isMenuOpen ? "display: flex" : "display: none"}`}
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  a {
    color: #fff;
    font-weight: 600;
  }
`;

export const ToggleMenu = styled.p`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

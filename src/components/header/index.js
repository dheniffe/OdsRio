import React, { useState } from "react";
import * as S from "./style";

import Logo from "../../assets/images/logoODS.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Header>
      <S.Logo src={Logo} alt="logo" />
      {isMenuOpen ? (
        <S.ToggleMenu onClick={() => setIsMenuOpen(false)}>XXXX</S.ToggleMenu>
      ) : (
        <S.ToggleMenu onClick={() => setIsMenuOpen(true)}>
          menuHamburger
        </S.ToggleMenu>
      )}
      <S.NavBar isMenuOpen={isMenuOpen}>
        <S.NavItem>
          <a href="#section-1">ODS 15</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#section-2">ODS 3</a>
        </S.NavItem>
      </S.NavBar>
    </S.Header>
  );
};

export default Header;

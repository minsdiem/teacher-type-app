import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px; /* Fixed height for layout calculations */
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  span {
    color: var(--text-color);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: var(--text-color);
  transition: color 0.2s;

  &:hover {
    color: var(--primary-color);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">
        Teacher<span>Type</span>
      </Logo>
      <Nav>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/tools">도구 탐색</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

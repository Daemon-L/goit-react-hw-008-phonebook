import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    min-width:520px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    border-bottom: 2px solid #0d6efd
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  padding: 12px;
  color:#444;
  
  &.active {
    color: #0d6efd;
  }
`;
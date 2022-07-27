import styled from 'styled-components';

import { NavLink } from "react-router-dom";

export const Text = styled.p`
  margin: 0 10px 0 24px;
  font-size: 24px;
  font-weight: 500;
`;

export const Welcom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const MenuConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
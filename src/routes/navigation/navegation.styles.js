import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer =styled.div `
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

`

export const LogoContainer=styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`
export const NavLink=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLinks=styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;

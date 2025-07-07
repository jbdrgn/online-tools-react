import React, { Component } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavBtn,
  NavBtnLink,
  NavMenu,
} from './NavbarElements';
import { asPath, capitalizeName } from '../../utils';
import {
  CALC,
  CONTACT,
  GEN,
  HOME,
  MAIN_BLUE_HEX_CODE,
  NET,
  NET_CALC,
  ONLINE_TOOLS_REACT,
  PASSWD,
  PASSWORD_GENERATOR,
  SIGN_IN
} from '../../constants/GeneralConstants';

class Navbar extends Component {
  render() {

    const { toggle } = this.props;

    return (
      <>
        <Nav>
          <NavLink to={asPath(ONLINE_TOOLS_REACT) + asPath(HOME)}>
            <img src={require('../../images/logo.svg')} alt='logo' />
          </NavLink>
          <Bars onClick={toggle} />
          <NavMenu>
            <NavLink to={asPath(ONLINE_TOOLS_REACT) + asPath(HOME)} activeStyle={{ color: MAIN_BLUE_HEX_CODE }}>
              {capitalizeName(HOME)}
            </NavLink>

            <NavLink to={asPath(ONLINE_TOOLS_REACT) + asPath(NET_CALC)} activeStyle={{ color: MAIN_BLUE_HEX_CODE }}>
              {capitalizeName(NET)} {capitalizeName(CALC)}
            </NavLink>

            <NavLink to={asPath(ONLINE_TOOLS_REACT) + asPath(PASSWORD_GENERATOR)} activeStyle={{ color: MAIN_BLUE_HEX_CODE }}>
              {capitalizeName(PASSWD)} {capitalizeName(GEN)}
            </NavLink>

            <NavLink to={asPath(ONLINE_TOOLS_REACT) + asPath(CONTACT)} activeStyle={{ color: MAIN_BLUE_HEX_CODE }}>
              {capitalizeName(CONTACT)}
            </NavLink>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to={asPath(SIGN_IN)}>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  }
}

export default Navbar;

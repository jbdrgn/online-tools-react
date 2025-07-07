import React, { Component } from 'react'
import { asPath, capitalizeName } from '../../utils';
import {
    CALC,
    CONTACT,
    GEN,
    HOME,
    NET,
    NET_CALC,
    ONLINE_TOOLS_REACT,
    PASSWD,
    PASSWORD_GENERATOR,
} from '../../constants/GeneralConstants';
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarDiv,
    SidebarUl,
    SidebarLinkRouter
} from './SidebarElements';

class Sidebar extends Component {
    render() {

        const { isSidebar, toggle } = this.props;

        return (
            <SidebarContainer isSidebar={isSidebar} onClick={toggle}>
                <Icon onclick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarDiv>
                    <SidebarUl>
                        <SidebarLinkRouter to={asPath(ONLINE_TOOLS_REACT) + asPath(HOME)}>{capitalizeName(HOME)}</SidebarLinkRouter>
                        <SidebarLinkRouter to={asPath(ONLINE_TOOLS_REACT) + asPath(NET_CALC)}>{capitalizeName(NET)} {capitalizeName(CALC)}</SidebarLinkRouter>
                        <SidebarLinkRouter to={asPath(ONLINE_TOOLS_REACT) + asPath(PASSWORD_GENERATOR)}>{capitalizeName(PASSWD)} {capitalizeName(GEN)}</SidebarLinkRouter>
                        <SidebarLinkRouter to={asPath(ONLINE_TOOLS_REACT) + asPath(CONTACT)}>{capitalizeName(CONTACT)}</SidebarLinkRouter>
                    </SidebarUl>
                </SidebarDiv>
                {/*
                <SidebarBtnDiv>
                    <SidebarBtnLinkRouter to={asPath(SIGN_IN)}>{capitalizeName(SIGN)} {capitalizeName(IN)}</SidebarBtnLinkRouter>
                </SidebarBtnDiv>
                */}
            </SidebarContainer>
        )
    }
}

export default Sidebar;
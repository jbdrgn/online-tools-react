import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;

    opacity: ${({ isSidebar }) => (isSidebar ? '100%' : '0')};
    top: ${({ isSidebar }) => (isSidebar ? '0' : '-100%')};

    /* top: 0; */
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #15cdfc;
    }    
`;

export const SidebarDiv = styled.div`
    color: #fff;
`;

export const SidebarUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    //grid-template-rows: repeat(3,90px);
    grid-template-rows: repeat(4,120px);
    text-align: center;

    @media screen and (max-width: 480px){
        //grid-template-rows: repeat(3,90px);
        grid-template-rows: repeat(4,120px);
    }
`;

export const SidebarLinkRouter = styled(LinkRouter)`
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    padding: 16px 64px;
    color: black;
    font-size: 24px;
    outline: none;
    border: none;
    cursor: pointer
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #15cdfc;
    }
`;

export const SidebarBtnDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarBtnLinkRouter = styled(LinkRouter)`
    color: #fff;
    background: #000;
    border-radius: 50px;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: #000;
        background: #15cdfc;
        transition: all 0.2s ease-in-out;
    }
`;
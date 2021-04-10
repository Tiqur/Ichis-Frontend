import styled from 'styled-components';
import Logo from '../components/Text';
import FlexDiv from './FlexDiv/FlexDiv';
import GithubIcon from '../assets/github-icon.png';
import React from 'react';
import { ReactComponent as HamburgerIcon } from '../assets/hamburger.svg';
import Drawer from './Drawer/Drawer';
import { useEffect, useState } from 'react';


const NavContainer = styled(FlexDiv)`
    top: 0;
    flex-direction: row;
    align-items: center;
    background: #121212;
    transition: 200ms;
    position: fixed;
    left: 0;
    width: 100%;
    height: 3em;
    filter: ${props => props.scrolled ? 'drop-shadow(0px 0px 4px #000000)' : ''};
`;

const InternalContainer = styled(FlexDiv)`
    top: 0;
    position: fixed;
    flex-direction: row;
    width: 80%;
    height: 3em;
    z-index: 9999;
    justify-content: center;
`;

const NavBar = () => {
    
    const [isScrolled, setScrolled] = useState(false);
    const [drawerIsOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScrolled(window.pageYOffset > 0);
        })
    }, []);

    return (
        <>
            <NavContainer scrolled={isScrolled} />
            <InternalContainer>
            <HamburgerIcon src={HamburgerIcon} fill='white' style={{height: '2.3em', marginTop: '0.4em'}} />
            <a style={{marginLeft: 'auto', right: "8px", height: "52px", userSelect: 'none'}} href='https://github.com/Tiqur/ichis-frontend'>
                <img src={GithubIcon} style={{height: "2em", marginTop: '0.5em'}}/>
            </a>
            <Drawer show={drawerIsOpen} />
            </InternalContainer>
        </>

    )
};

export default NavBar;

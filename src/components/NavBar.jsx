import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import GithubIcon from '../assets/github-icon.png'
import HamburgerIcon from './HamburgerIcon';
import Drawer from './Drawer';
import { useEffect, useState } from 'react';


const NavContainer = styled(FlexDiv)`
    flex-direction: row;
    align-items: center;
    background: #121212;
    transition: 200ms;
    position: fixed;
    left: 0;
    width: 100%;
    height: 80px;
    filter: ${props => props.scrolled ? 'drop-shadow(0px 0px 4px #000000)' : ''};
`;

const InternalContainer = styled(FlexDiv)`
    position: fixed;
    flex-direction: row;
    width: 80%;
    height: 80px;
    justify-content: center;
`;

const NavBar = (props) => {
    
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
            <HamburgerIcon drawerState={[drawerIsOpen, setDrawerOpen]} />
            <a style={{marginLeft: 'auto', right: "8px", height: "52px"}} href='https://github.com/Tiqur/ichis-frontend'>
                <img src={GithubIcon} style={{height: "52px", marginTop: '18px'}}/>
            </a>
            <Drawer show={drawerIsOpen} />
            </InternalContainer>
        </>

    )
};

export default NavBar;
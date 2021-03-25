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
    width: 100%;
    height: 50px;
    filter: ${props => props.scrolled ? 'drop-shadow(0px 0px 4px #000000)' : ''};
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
            <NavContainer scrolled={isScrolled}>
                <a style={{position: "absolute", right: "8px", height: "35px"}} href='https://github.com/Tiqur/ichis-frontend'>
                    <img src={GithubIcon} style={{height: "35px"}}/>
                </a>
            </NavContainer>
            <Drawer show={drawerIsOpen} />
            <HamburgerIcon drawerState={[drawerIsOpen, setDrawerOpen]} />
        </>

    )
};

export default NavBar;
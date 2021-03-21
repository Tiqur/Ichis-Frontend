import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import GithubIcon from '../assets/github-icon.png'

const NavContainer = styled(FlexDiv)`
    flex-direction: row;
    align-items: center;
    background: red;
    height: 50px;
    height: 50px;
`;

const NavBar = (props) => {
    return (
        <NavContainer>
            <img src={GithubIcon} style={{position: "absolute", right: "8px", height: "40px"}}/>
        </NavContainer>
    )
};

export default NavBar;
import styled from 'styled-components';
import FlexDiv from './FlexDiv';

const HamburgerContainer = styled(FlexDiv)`
    flex-direction: column;
    background: red;
    height: 100vh;
    width: 200px;
`;


const HamburgerMenu = (props) => {
    return (
        <HamburgerContainer>

        </HamburgerContainer>
    )
};

export default HamburgerMenu;
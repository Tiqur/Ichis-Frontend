import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import HamburgerIcon from './HamburgerIcon';

const DrawerContainer = styled(FlexDiv)`
    position: fixed;
    height: 100vh;
    width: ${props => props.show ? '250px' : '0px'};
    transition: 300ms;
    background: #181818;
`;


const Drawer = (props) => {

    return (
        <DrawerContainer show={props.show}>
                {/* <HamburgerIcon drawerState={props.drawerState} /> */}

        </DrawerContainer>
    )
}

export default Drawer;
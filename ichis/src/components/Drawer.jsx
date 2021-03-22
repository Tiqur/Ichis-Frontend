import styled from 'styled-components';
import FlexDiv from './FlexDiv';


const DrawerContainer = styled(FlexDiv)`
    position: fixed;
    height: 100vh;
    width: ${props => props.show ? '250px' : '0px'};
    transition: 150ms;
    background: #181818;
`;


const Drawer = (props) => {

    console.log(props.show)

    return (
        <DrawerContainer show={props.show}>

        </DrawerContainer>
    )
}

export default Drawer;
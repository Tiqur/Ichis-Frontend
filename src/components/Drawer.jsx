import styled from 'styled-components';
import FlexDiv from './FlexDiv';

const DrawerContainer = styled(FlexDiv)`
    position: fixed;
    left: 0;
    height: 100vh;
    width: ${props => props.show ? '300px' : '0px'};
    transition: 300ms;
    background: #181818;


    @media(max-width: 600px) {
        width: ${props => props.show ? '100vw' : '0'};
        height: ${props => props.show ? '80vh' : '0'};
    }
`;


const Drawer = (props) => {

    return (
        <DrawerContainer show={props.show}>

        </DrawerContainer>
    )
}

export default Drawer;
import styled from 'styled-components';
import FlexDiv from './FlexDiv';


const DrawerContainer = styled(FlexDiv)`
    height: 100vh;
    width: 350px;
    background: red;
`;


const Drawer = (props) => {
    return (
        <DrawerContainer>

        </DrawerContainer>
    )
}

export default Drawer;
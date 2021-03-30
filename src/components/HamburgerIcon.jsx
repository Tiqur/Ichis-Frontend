import styled from 'styled-components';
import FlexDiv from './FlexDiv/FlexDiv';


const BarDiv = styled(FlexDiv)`
    background: white;
    height: 8px;
    width: 45px;
    border-radius: 5px;
    transition: 300ms;
    margin-top: ${props => props.open ? '-5px' : '8px'};
    transform: ${props => props.open ? props.a ? 'rotate(45deg) translateY(4px)' : 'rotate(-45deg) translateY(-4px)': 'rotate(0)'};
    opacity: ${props => props.open && props.b ? '0' : "100"};
    user-select: none;
`;

const Container = styled(FlexDiv)`
    left: ${props => props.open ? '235px' : 'initial'};
    position: ${props => props.open ? 'fixed' : 'initial'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
    margin-top: 8px;
    margin-right: auto;
    transition: 300ms;
    height: 50px;
    user-select: none;
    z-index: 1;
    
    &:hover * {
        background: #929292;
    }

    &:hover {
        cursor: pointer;
    }

    @media(max-width: 600px) {
        top: ${props => props.open ? '75vh' : '0px'};
        left: 0px;
    }
`;

const HamburgerIcon = (props) => {

    const [IsOpen, SetOpen] = props.drawerState;

    return (
        <Container open={IsOpen} onClick={() => {SetOpen(!IsOpen)}}>
            <BarDiv open={IsOpen} a/>
            <BarDiv open={IsOpen} b/>
            <BarDiv open={IsOpen} c/>
        </Container>
    )
};

export default HamburgerIcon;
import styled from 'styled-components';
import FlexDiv from './FlexDiv';


const BarDiv = styled(FlexDiv)`
    background: white;
    margin-left: 8px;
    height: 5px;
    width: 33px;
    border-radius: 5px;
    transition: 300ms;
    margin-top: ${props => props.open ? '-5px' : '4px'};
    transform: ${props => props.open ? props.a ? 'rotate(45deg)' : 'rotate(-45deg)': 'rotate(0)'};
    opacity: ${props => props.open && props.b ? '0' : "100"};
`;

const Container = styled(FlexDiv)`
    position: absolute;
    margin-top: ${props => props.open ? '8px' : '0px'};
    margin-left: ${props => props.open ? '200px' : '0px'};
    flex-direction: column;
    justify-content: center;
    transition: 300ms;
    align-items: center;
    margin-bottom: 4px;
    height: 30px;
    z-index: 1;
    
    &:hover * {
        background: #929292;
    }

    &:hover {
        cursor: pointer;
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
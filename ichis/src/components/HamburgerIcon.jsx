import styled from 'styled-components';
import { useState } from 'react';
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
    margin-top: ${props => props.open ? '8px' : '0px'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
    transition: 300ms;
    height: 30px;

    
    &:hover * {
        background: #929292;
    }

    &:hover {
        cursor: pointer;
    }
`;

const HamburgerIcon = () => {

    const [IsOpen, SetOpen] = useState(false);

    return (
        <Container open={IsOpen} onClick={() => {SetOpen(!IsOpen)}}>
            <BarDiv open={IsOpen} a/>
            <BarDiv open={IsOpen} b/>
            <BarDiv open={IsOpen} c/>
        </Container>
    )
};

export default HamburgerIcon;
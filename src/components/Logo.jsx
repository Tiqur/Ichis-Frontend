import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import FlexDiv from './FlexDiv/FlexDiv';
import Text from '../components/Text';

const Container = styled(FlexDiv)`
    justify-content: center;
    vertical-align: top;
    align-items: center;
    margin-bottom: -50px;
    height: 100px;
    width: auto;
    transition: 500ms;
`;

const Square = styled.div`
    height: 20px;
    width: 20px;
    background: ${props => props.color};
    user-select: none;
    margin-bottom: 30px;
    transition: 300ms;
    transform: translateX(${props => props.height+24}px) translateY(${props => props.height}px) rotateZ(45deg);
`;

const Triangle = styled.div`
    border-left: ${props => props.size / 4}px solid transparent;
    border-right: ${props => props.size / 4}px solid transparent;
    border-bottom: ${props => props.size / 4}px solid ${props => props.color};
    transform: translateY(${props => props.height}px) translateX(${props => props.tx}px);
    user-select: none;
    margin-right: 10px;
`;

const AnimateSquares = (ref, h) => {
    if (!ref) return;
    const height = 50;
    ref.style.transform = `translateX(${h+24}px) translateY(${-4-height}px) rotateZ(0deg)`;
    setTimeout(() => {
        ref.style.transform = `translateX(${h+24}px) translateY(${h}px) rotateZ(-45deg)`;
    }, 301);
};

const Logo = (props) => {
    const sr1 = useRef(null);
    const sr2 = useRef(null);
    const sr3 = useRef(null);
    const s1h = -4;
    const s2h = 2;
    const s3h = 8;

    useEffect(() => {
        // Animate logo on page load
        setTimeout(() => {AnimateSquares(sr1.current, s1h)}, 600);
        setTimeout(() => {AnimateSquares(sr2.current, s2h)}, 800);
        setTimeout(() => {AnimateSquares(sr3.current, s3h)}, 1000);
    }, []);

    return (
        <Container>
            <Text size={5} font='Sriracha' style={{marginLeft: '30px'}}>Ichis</Text>
            <Square height={s1h} size={props.size} color='#6C63FF' ref={sr1}/>
            <Square height={s2h}  size={props.size} color='#6C63FF' ref={sr2}/>
            <Square height={s3h} size={props.size} color='#6C63FF' ref={sr3}/>
            <Triangle height={-2} tx={-32} size={props.size} color='#948DFF'/>
            <Triangle height={4}  tx={-40} size={props.size} color='#948DFF'/>
        </Container>
    )
};

export default Logo;

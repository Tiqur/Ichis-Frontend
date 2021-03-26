import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import FlexDiv from './FlexDiv';


const Container = styled(FlexDiv)`
    justify-content: center;
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
    const height = 50;
    ref.style.transform = `translateX(${24}px) translateY(${-4-height}px) rotateZ(0deg)`;
    setTimeout(() => {
        ref.style.transform = `translateX(${h+24}px) translateY(${h}px) rotateZ(-45deg)`;
    }, 301);
};

const Logo = (props) => {
    const sr1 = useRef(null);
    const sr2 = useRef(null);
    const sr3 = useRef(null);
    const s1h = -4;
    const s2h = 4;
    const s3h = 12;

    useEffect(() => {
        // Animate logo on page load
        setTimeout(() => {AnimateSquares(sr1.current, s1h)}, 1100);
        setTimeout(() => {AnimateSquares(sr2.current, s2h)}, 1200);
        setTimeout(() => {AnimateSquares(sr3.current, s3h)}, 1300);
    }, []);

    return (
        <Container>
            <Square height={s1h} size={props.size} color='#6C63FF' ref={sr1}/>
            <Square height={s2h}  size={props.size} color='#6C63FF' ref={sr2}/>
            <Square height={s3h} size={props.size} color='#6C63FF' ref={sr3}/>
            <Triangle height={-2} tx={-32} size={props.size} color='#948DFF'/>
            <Triangle height={5}  tx={-38} size={props.size} color='#948DFF'/>
        </Container>
    )
};

export default Logo;
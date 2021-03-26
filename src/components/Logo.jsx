import styled from 'styled-components';
import FlexDiv from './FlexDiv';


const Container = styled(FlexDiv)`
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 200px;
    transition: 500ms;
`;

const Square = styled.div`
    height: 20px;
    width: 20px;
    background: ${props => props.color};
    user-select: none;
    margin-bottom: 30px;
    transition: 300ms;
    transform: translateX(${props => props.height+54}px) translateY(${props => props.height}px) rotateZ(45deg);
`;

const Triangle = styled.div`
    border-left: ${props => props.size / 2}px solid transparent;
    border-right: ${props => props.size / 2}px solid transparent;
    border-bottom: ${props => props.size / 2}px solid ${props => props.color};
    transform: translateY(${props => props.height}px) translateX(${props => props.tx}px);
    user-select: none;
    margin-right: 10px;
`;

const Logo = (props) => {
    return (
        <Container>
            <Square height={-4} size={props.size / 2} color='#6C63FF' id='s1'/>
            <Square height={4}  size={props.size / 2} color='#6C63FF' id='s2'/>
            <Square height={12} size={props.size / 2} color='#6C63FF' id='s3'/>
            <Triangle height={-2} tx={-2} size={props.size / 2} color='#948DFF'/>
            <Triangle height={5}  tx={-8} size={props.size / 2} color='#948DFF'/>
        </Container>
    )
};

export default Logo;
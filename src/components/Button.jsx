import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';

const Container = styled(FlexDiv)`
    height: auto;
    width: auto;
    padding: 5px 15px 5px 15px;
    background: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    border-radius: ${props => props.radius}px;
    transition: 300ms;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin}px;

    &:hover {
        background: ${props => props.hoverColor};
        cursor: pointer;
    }
`;

const Button = (props) => {

    return (
        <Container 
            onClick={props.function} 
            height={props.height || '50'} 
            width={props.width || '100'} 
            backgroundColor={props.backgroundColor || 'blue'} 
            textColor={props.textColor || 'black'}
            radius={props.radius || '15'}
            hoverColor={props.hoverColor || 'grey'}
            margin={props.margin || '30'}>
            {props.children}
        </Container>
    );
};

export default Button;
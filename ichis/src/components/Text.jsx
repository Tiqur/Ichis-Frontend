import styled from 'styled-components';

const Text = styled.p`
    color: ${props => props.color ? props.color : 'white'};
    font-weight: ${props => props.weight ? props.weight : 'initial'};
    font-size: ${props => props.size ? props.size : 'initial'};
    font-family: 'Roboto';
`;

export default Text;
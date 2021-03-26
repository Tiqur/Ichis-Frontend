import styled from 'styled-components';

const Text = styled.p`
    color: ${props => props.color ? props.color : 'white'};
    font-weight: ${props => props.weight ? props.weight : 'initial'};
    font-size: ${props => props.size ? props.size : 'initial'}px;
    font-family: ${props => props.font || 'Roboto'};
    user-select: ${props => props.dontSelect ? 'none' : 'initial'};

    // Mobile
    @media(max-width: 1050px) {
        font-size: ${props => props.size ? props.size-10 : 'initial'}px;
    }
`;

export default Text;
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: ${props => props ? props.direction : 'initial'};
`;

export default FlexDiv;
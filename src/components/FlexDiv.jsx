import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    text-align: center;
    flex-direction: ${props => props ? props.direction : 'initial'};
`;

export default FlexDiv;
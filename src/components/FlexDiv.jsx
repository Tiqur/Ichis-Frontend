import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: ${props => props ? props.direction : 'initial'};
`;

export default FlexDiv;
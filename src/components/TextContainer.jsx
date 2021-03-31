import styled from 'styled-components';
import FlexDiv from './FlexDiv/FlexDiv';

const Container = styled(FlexDiv)`
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
`;

const TextContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
};

export default TextContainer;
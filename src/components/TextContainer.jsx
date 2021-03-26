import styled from 'styled-components';
import FlexDiv from './FlexDiv';

const Container = styled(FlexDiv)`
    flex-direction: column;
`;

const TextContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
};

export default TextContainer;
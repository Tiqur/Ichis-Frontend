import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';
import NavBar from '../components/NavBar';


const Container = styled(FlexDiv)`
    flex-direction: column;
`;



const HomePage = (props) => {
    return (
        <Container>
            <NavBar />
        </Container>
    )
};

export default HomePage;
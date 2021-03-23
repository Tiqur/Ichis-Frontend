import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';
import NavBar from '../components/NavBar';


const Container = styled(FlexDiv)`
    flex-direction: column;
`;

const HeightContainer = styled(FlexDiv)`
    height: 100vh;
    background: ${props => props.color};
    width: 100%;
`;



const HeroContainer = (props) => {
    return (
        <HeightContainer>
            
        </HeightContainer>
    )
};



const HomePage = (props) => {
    return (
        <Container>
            <NavBar />
            <HeightContainer color='blue'/>
            <HeightContainer color='red'/>
        </Container>
    )
};

export default HomePage;
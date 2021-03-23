import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';
import NavBar from '../components/NavBar';


const HeightContainer = styled(FlexDiv)`
    height: 100vh;
    width: 100%;
    background: ${props => props.color};
`;

const HeroContainer = (props) => {
    return (
        <HeightContainer>

        </HeightContainer>
    )
};



const HomePage = (props) => {
    return (
        <FlexDiv direction="column" >
            <NavBar />
            <HeightContainer color='blue'/>
            <HeightContainer color='red'/>
        </FlexDiv>
    )
};

export default HomePage;
import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';
import NavBar from '../components/NavBar';
import Text from '../components/Text';


const HeightContainer = styled(FlexDiv)`
    height: 100vh;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background: ${props => props.color};
`;

const ContentBox = styled(FlexDiv)`
    flex-direction: column;
    height: 70%;
    width: 50%;
    margin-left: 50px;
    text-align: center;
    justify-content: center;
    background: red;
`;


const ImageContainer = styled(FlexDiv)`
    height: 70%;
    width: 50%;
    margin-right: 50px;
    background: green;
`;


const HeroContainer = (props) => {
    return (
        <HeightContainer>
            <ContentBox>
                <Text color='#CDCDCD' size='59px'>
                    Perfectly synced video for everyone                
                </Text>
                <Text color='#8A8585' size='30px'>
                    Ichis is a minimalistic video player designed to deliver <br/>crystal clear, synchronized audio and video to<br/>numerous users at once.
                </Text>
            </ContentBox>
            <ImageContainer />
        </HeightContainer>
    )
};



const HomePage = (props) => {
    return (
        <FlexDiv direction="column" >
            <NavBar />
            <HeroContainer />
            <HeroContainer />
            <HeroContainer />
        </FlexDiv>
    )
};

export default HomePage;
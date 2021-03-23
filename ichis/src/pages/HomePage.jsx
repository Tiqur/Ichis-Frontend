import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';
import NavBar from '../components/NavBar';
import Text from '../components/Text';


const HeightContainer = styled(FlexDiv)`
    height: 100vh;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

const ContentBox = styled(FlexDiv)`
    flex-direction: column;
    position: sticky;
    top: 20px;
    height: 40%;
    width: 50%;
    margin-left: 50px;
    text-align: center;
`;


const ImageContainer = styled(FlexDiv)`
    height: 70%;
    width: 50%;
    margin-right: 50px;
`;


const HomePage = (props) => {
    return (
        <FlexDiv direction="column" >
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

            <HeightContainer>
            <ImageContainer />
            <ContentBox>
                <Text color='#CDCDCD' size='59px'>
                    Watch unlimited videos from a variety of different platforms                
                </Text>
            </ContentBox>
            </HeightContainer>
            
            <HeightContainer>
            <ContentBox>
                <Text color='#CDCDCD' size='59px'>
                    Watch on any device              
                </Text>
            </ContentBox>
            <ImageContainer />
            </HeightContainer>
            <NavBar />
        </FlexDiv>
    )
};

export default HomePage;
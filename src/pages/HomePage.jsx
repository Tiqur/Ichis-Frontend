import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';
import NavBar from '../components/NavBar';
import Text from '../components/Text';
import Gallery from '../components/Gallery';
import { keyframes } from 'styled-components';

const HeightContainer = styled(FlexDiv)`
    height: 100vh;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;


const fadeIn = keyframes`
    from { transform: translateY(-100px); opacity: 0; }
    to { transform: translateY(0px); opacity: 1; }
`;

const ContentBox = styled(FlexDiv)`
    flex-direction: column;
    position: sticky;
    top: 20px;
    height: 40%;
    width: 50%;
    margin-left: 50px;
    text-align: center;
    animation: 500ms ${fadeIn} ease-in;
`;


const ImageContainer = styled(FlexDiv)`
    justify-content: center;
    align-items: center;
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
            <ImageContainer>
                <Gallery spacing={'520px'}>
                    <img src='https://dummyimage.com/1920x1080/ff00ff/0011ff'/>
                    <img src='https://dummyimage.com/1920x1080/ff0000/fff'/>
                    <img src='https://dummyimage.com/1920x1080/00ccff/fff'/>
                    <img src='https://dummyimage.com/1920x1080/00ff73/fff'/>
                    <img src='https://dummyimage.com/1920x1080/ccff00/fff'/>
                    <img src='https://dummyimage.com/1920x1080/ffb700/fff'/>
                </Gallery>
            </ImageContainer>
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
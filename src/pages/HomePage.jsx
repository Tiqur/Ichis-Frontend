import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';
import NavBar from '../components/NavBar';
import Text from '../components/Text';
import Gallery from '../components/Gallery';
import TextContainer from '../components/TextContainer';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { keyframes } from 'styled-components';


const HeightContainer = styled(FlexDiv)`
    height: 100vh;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-top: 100px;

    // Alternate image position
    &:nth-child(2) {
        flex-direction: row-reverse;
    }

    // Mobile
    @media(max-width: 1050px) {
        // Put image under content
        flex-direction: column;

        // Don't alternate image position
        &:nth-child(2) {
            flex-direction: column;
        }
    }
`;

const fadeIn = keyframes`
    from { transform: translateY(-100px); opacity: 0; }
    to { transform: translateY(0px); opacity: 1; }
`;

const ContentBox = styled(FlexDiv)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 20px;
    height: 70%;
    width: 50%;
    text-align: center;
    animation: 500ms ${fadeIn} ease-in;

    // Mobile: Remove 'sticky' effect
    @media(max-width: 1050px) {
        position: initial;
    }
`;

const ImageContainer = styled(FlexDiv)`
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 50%;
`;


const HomePage = (props) => {
    return (
        <FlexDiv direction="column" style={{width: '100%'}}>
            <HeightContainer>
            <ContentBox>
                <TextContainer>
                    <Logo size={50}/>
                    <Text color='#CDCDCD' size={59}>
                        Perfectly synchronized video for everyone                
                    </Text>
                    <Text color='#8A8585' size={30}>
                        Ichis is a minimalistic video player designed to deliver <br/>crystal clear, synchronized audio and video to<br/>numerous users at once.
                    </Text>
                    <FlexDiv direction='row'>
                        <Button backgroundColor='#6C63FF' hoverColor='#4b43e6' radius={76} width={180} height={60} function={() => {console.log("Create Room")}}>
                            <Text weight='bold' color='#e1e1e1' dontSelect>
                                Create Room
                            </Text>
                        </Button>                        
                        <Button backgroundColor='#44474C' hoverColor='#34373c' radius={76} width={130} height={60} function={() => {console.log("Download")}}>
                            <Text weight='bold' color='#e1e1e1' dontSelect>
                                Download
                            </Text>
                        </Button>
                    </FlexDiv>
                </TextContainer>
           </ContentBox>
            <ImageContainer>
                <Gallery spacing={420} size={200}>
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
            <ContentBox>
                <Text color='#CDCDCD' size={59}>
                    Watch unlimited videos from a variety platforms                
                </Text>
            </ContentBox>
            <ImageContainer />
            </HeightContainer>
            
            <HeightContainer>
            <ContentBox>
                <Text color='#CDCDCD' size={59}>
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
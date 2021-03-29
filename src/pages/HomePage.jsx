// This is very messy because I forgot to start with mobile :/

import styled from 'styled-components';
import FlexDiv from '../components/FlexDiv';
import NavBar from '../components/NavBar';
import Text from '../components/Text';
import Gallery from '../components/Gallery';
import TextContainer from '../components/TextContainer';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const HeightContainer = styled(FlexDiv)`
    min-height: 150vh;
    width: 100%;
    flex-direction: row;
    margin-top: 100px;
    justify-content: center;
    margin-top: ${props => props.marginTop || 'initial'};

    // Alternate image position
    &:nth-child(2) {
        flex-direction: row-reverse;
    }

    // Mobile
    @media(max-width: 1050px) {
        // Put image under content
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        min-height: 100vh;
        
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
    top: 20px;
    height: 75vh;
    width: 50%;
    text-align: center;
    animation: 500ms ${fadeIn} ease-in;
    opacity: ${props => props.showContent ? '1' : '0'};
    transition: 400ms;

    // Mobile: Remove 'sticky' effect
    @media(max-width: 1050px) {
        // Dont fade in on mobile
        opacity: 1;
        
        width: 100%;
        height: auto;
        position: initial;
    }
`;

const ImageContainer = styled(FlexDiv)`
    justify-content: center;
    position: sticky;
    top: 100px;
    align-items: center;
    height: 75vh;
    width: 50%;
    opacity: ${props => props.showContent ? '1' : '0'};
    margin-top: ${props => props.marginTop || 'initial'};
    transition: 400ms;

    @media(max-width: 1050px) {
        margin-top: initial;
        position: initial;
        opacity: 1;
        width: 100%;
    }
`;


const HomePage = () => {
    const [pageY, setPageY] = useState(false);
    const pageHeight = window.outerHeight;

    useEffect(() => {
        window.addEventListener('scroll', () => {setPageY(window.pageYOffset)})
        return window.removeEventListener('scroll', () => {setPageY(window.pageYOffset)})
    }, [])

    return (
        <FlexDiv direction="column" style={{width: '100%'}}>


            {/*  Hero 1  */}
            <HeightContainer style={{paddingTop: '50px'}}>
            <ContentBox showContent={pageY < pageHeight / 2.5}>
                <TextContainer>
                    <Logo size={50}/>
                    <Text color='#CDCDCD' size={59}>
                        Perfectly synchronized video for everyone                
                    </Text>
                    <Text color='#8A8585' size={30}>
                        Ichis is a minimalistic video player designed to deliver <br/>crystal clear, audio and video to<br/>numerous users at once.
                    </Text>
                    <FlexDiv direction='row' style={{justifyContent: 'center'}}>
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
                <ImageContainer showContent={pageY < pageHeight/2.5}>
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


            {/*  Hero 2  */}
            <HeightContainer marginTop='-75vh'>
                <ContentBox showContent={pageY >= pageHeight/2.5 && pageY < pageHeight}>
                    <TextContainer>
                        <Text color='#CDCDCD' size={59}>
                            Watch unlimited videos from a variety platforms                
                        </Text>
                    </TextContainer>
                </ContentBox>
                <ImageContainer showContent={pageY >= pageHeight/2.5 && pageY < pageHeight} marginTop='-100vh'>
                    <img style={{height: 'auto', maxWidth: '80%'}} src='https://dummyimage.com/1920x1080/ff00ff/0011ff'/>
                </ImageContainer>           
            </HeightContainer>
            

            {/*  Hero 3  */}
            <HeightContainer marginTop='-100vh' style={{height: 'auto'}}>
                <ContentBox showContent={pageY >= pageHeight}>
                    <TextContainer>
                        <Text color='#CDCDCD' size={59}>
                            Watch on any device              
                        </Text>  
                    </TextContainer>
                </ContentBox>
                <ImageContainer showContent={pageY >= pageHeight} marginTop='-100vh'>
                    <img style={{height: 'auto', maxWidth: '80%'}} src='https://dummyimage.com/1920x1080/ff0000/0011ff'/>
                </ImageContainer>            
            </HeightContainer>
            <NavBar />
        </FlexDiv>
    )
};

export default HomePage;
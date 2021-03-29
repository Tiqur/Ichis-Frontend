import FlexDiv from '../../components/FlexDiv';
import NavBar from '../../components/NavBar';
import Text from '../../components/Text';
import Gallery from '../../components/Gallery';
import TextContainer from '../../components/TextContainer';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import './HomePage.scss';


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
            <FlexDiv className='height-container' style={{paddingTop: '50px', marginTop: '100px'}}>
            <FlexDiv className='content-box' style={{opacity: +(pageY < pageHeight / 2.5)}}>
                <TextContainer>
                    <Logo size={50}/>
                    <Text color='#CDCDCD' size={7}>
                        Perfectly synchronized video for everyone                
                    </Text>
                    <Text color='#8A8585' size={5}>
                        Ichis is a minimalistic video player designed to deliver <br/>crystal clear, audio and video to<br/>numerous users at once.
                    </Text>
                    <FlexDiv direction='row' style={{justifyContent: 'center'}}>
                        <Button backgroundColor='#6C63FF' hoverColor='#4b43e6' radius={76} function={() => {console.log("Create Room")}}>
                        <Text weight='bold' color='#e1e1e1' dontSelect size={2.5}>
                                Create Room
                            </Text>
                        </Button>                        
                        <Button backgroundColor='#44474C' hoverColor='#34373c' radius={76} function={() => {console.log("Download")}}>
                            <Text weight='bold' color='#e1e1e1' dontSelect size={2.5}>
                                Download
                            </Text>
                        </Button>
                    </FlexDiv>
                </TextContainer>
           </FlexDiv>
                <FlexDiv className='image-container' style={{opacity: +(pageY < pageHeight/2.5), marginTop: 'initial'}}>
                    <Gallery spacing={420} size={200}>
                        <img src='https://dummyimage.com/1920x1080/ff00ff/0011ff'/>
                        <img src='https://dummyimage.com/1920x1080/ff0000/fff'/>
                        <img src='https://dummyimage.com/1920x1080/00ccff/fff'/>
                        <img src='https://dummyimage.com/1920x1080/00ff73/fff'/>
                        <img src='https://dummyimage.com/1920x1080/ccff00/fff'/>
                        <img src='https://dummyimage.com/1920x1080/ffb700/fff'/>
                    </Gallery>
                </FlexDiv>   
            </FlexDiv>


            {/*  Hero 2  */}
            <FlexDiv className='height-container' style={{marginTop: '-75vh'}}>
                <FlexDiv className='content-box' style={{opacity: +(pageY >= pageHeight / 2.5 && pageY < pageHeight)}}>
                    <TextContainer>
                        <Text color='#CDCDCD' size={5}>
                            Watch unlimited videos from a variety platforms                
                        </Text>
                    </TextContainer>
                </FlexDiv>
                <FlexDiv className='image-container' style={{opacity: +(pageY >= pageHeight / 2.5 && pageY < pageHeight), marginTop: '-100vh'}}>
                    <img style={{height: 'auto', maxWidth: '80%'}} src='https://dummyimage.com/1920x1080/ff00ff/0011ff'/>
                </FlexDiv>           
            </FlexDiv>
            

            {/*  Hero 3  */}
            <FlexDiv className='height-container' style={{height: 'auto', marginTop: '-100vh'}}>
                <FlexDiv className='content-box' style={{opacity: +(pageY >= pageHeight)}}>
                    <TextContainer>
                        <Text color='#CDCDCD' size={5}>
                            Watch on any device              
                        </Text>  
                    </TextContainer>
                </FlexDiv>
                <FlexDiv className='image-container' style={{opacity: +(pageY >= pageHeight), marginTop: '-100vh'}}>
                    <img style={{height: 'auto', maxWidth: '80%'}} src='https://dummyimage.com/1920x1080/ff0000/0011ff'/>
                </FlexDiv>            
            </FlexDiv>
            <NavBar />
        </FlexDiv>
    )
};

export default HomePage;
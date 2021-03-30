import FlexDiv from '../../components/FlexDiv/FlexDiv';
import NavBar from '../../components/NavBar';
import Text from '../../components/Text';
import Gallery from '../../components/Gallery';
import TextContainer from '../../components/TextContainer';
import Logo from '../../components/Logo';
import Button from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import styles from'./HomePage.module.scss';
import classNames from 'classnames';
import '../../index.scss';

const HomePage = () => {
    const [pageY, setPageY] = useState(false);
    const pageHeight = window.outerHeight;
    const cn = classNames.bind(styles);

    useEffect(() => {
        window.addEventListener('scroll', () => {setPageY(window.pageYOffset)})
        return window.removeEventListener('scroll', () => {setPageY(window.pageYOffset)})
    }, [])

    return (
        <FlexDiv className={cn('column', 'width100')}>

            {/*  Hero 1  */}
            <FlexDiv className={cn(styles.height_container, 'p-top50', 'm-top100')}>
            <FlexDiv className={cn(styles.content_box, 'text_align_center', {transparent: pageY >= pageHeight / 2.5})}>
                <TextContainer>
                    <Logo size={50}/>
                    <Text color='#CDCDCD' size={7}>
                        Perfectly synchronized video for everyone                
                    </Text>
                    <Text color='#8A8585' size={5}>
                        Ichis is a minimalistic video player designed to deliver <br/>crystal clear, audio and video to<br/>numerous users at once.
                    </Text>
                    <FlexDiv justifyCenter className={cn('direction_row', 'justify_center')}>
                        <Button isMain className='margin32p' function={() => {console.log("Create Room")}}>
                        <Text weight='bold' color='#e1e1e1' dontSelect size={2.5}>
                                Create Room
                            </Text>
                        </Button>                        
                        <Button className='margin32p' function={() => {console.log("Download")}}>
                            <Text weight='bold' color='#e1e1e1' dontSelect size={2.5}>
                                Download
                            </Text>
                        </Button>
                    </FlexDiv>
                </TextContainer>
           </FlexDiv>
                <FlexDiv className={cn(styles.image_container, 'margin-top-init', {transparent: pageY >= pageHeight / 2.5})}>
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
            {/* <FlexDiv className={styles.height_container} style={{marginTop: '-75vh'}}>
                <FlexDiv className={styles.content_box} style={{opacity: +(pageY >= pageHeight / 2.5 && pageY < pageHeight)}}>
                    <TextContainer>
                        <Text color='#CDCDCD' size={5}>
                            Watch unlimited videos from a variety platforms                
                        </Text>
                    </TextContainer>
                </FlexDiv>
                <FlexDiv className={styles.image_container} style={{opacity: +(pageY >= pageHeight / 2.5 && pageY < pageHeight), marginTop: '-100vh'}}>
                    <img style={{height: 'auto', maxWidth: '80%'}} src='https://dummyimage.com/1920x1080/ff00ff/0011ff'/>
                </FlexDiv>           
            </FlexDiv> */}
            

            {/*  Hero 3  */}
            {/* <FlexDiv className={styles.height_container} style={{height: 'auto', marginTop: '-100vh'}}>
                <FlexDiv className={styles.content_box} style={{opacity: +(pageY >= pageHeight)}}>
                    <TextContainer>
                        <Text color='#CDCDCD' size={5}>
                            Watch on any device              
                        </Text>  
                    </TextContainer>
                </FlexDiv>
                <FlexDiv className={styles.image_container} style={{opacity: +(pageY >= pageHeight), marginTop: '-100vh'}}>
                    <img style={{height: 'auto', maxWidth: '80%'}} src='https://dummyimage.com/1920x1080/ff0000/0011ff'/>
                </FlexDiv>            
            </FlexDiv> */}
            {/* <NavBar /> */}
        </FlexDiv>
    )
};

export default HomePage;
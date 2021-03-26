import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import { useState } from 'react';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  perspective: 1000px;
  animation: 500ms ${fadeIn} ease-in;
`;

const Carousel = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: 800ms;
  transform: rotateY(${props => props.degY}deg);

  @media(max-width: 2150px) {
    transform: rotateX(${props => props.degY}deg);
  }

  // Mobile
  @media(max-width: 1050px) {
    transform: rotateY(${props => props.degY}deg);
  }
`;

const ImageDiv = styled.img`
    display: block;
    position: absolute;
    height: ${props => props.size}px;
    margin: 0px 5px 0px 5px;
    transition: 300ms;
    transform: rotateY(${props => props.degY}deg) translateZ(${props => props.translateZ || 0}px);
    opacity: ${props => props.main ? '1' : '.2'};
    user-select: none; 
    
    @media(max-width: 2150px) {
        height: ${props => props.size -50}px;
        transform: rotateX(${props => props.degY}deg) translateZ(${props => props.translateZ -80 || 0}px);
    }

    @media(max-width: 1650px) {
        height: ${props => props.size -50}px;
    }

    // Mobile
    @media(max-width: 1050px) {
        transform: rotateY(${props => props.degY}deg) translateZ(${props => props.translateZ || 0}px);
        opacity: ${props => props.main ? '1' : '0'};
        height: ${props => props.main ? props.size - 75 : '0'}px;
    }

`;

const Gallery = (props) => {

    const children = props.children;
    const [currentDegrees, setCurrentDegrees] = useState(0);
    const degreesY = 360 / children.length;
    const rotations = currentDegrees / degreesY;
    let rotateTimeout = null;

    // Auto rotate gallery
    const startAutoRotate = () => {
        rotateTimeout = setTimeout(() => {
            setCurrentDegrees(currentDegrees + degreesY % 360 === 0 ? 0 : currentDegrees + degreesY) 
        }, 3000);
    }

    startAutoRotate();

    return (
        <Container>
            <Carousel degY={currentDegrees}>
                {children.map(e => <ImageDiv 
                size={props.size}
                key={children.indexOf(e)} 
                src={e.props.src} 
                translateZ={props.spacing}
                main={(rotations * degreesY % 360 === 0 ? 0 : 360) - rotations * 60 % 360 === degreesY*children.indexOf(e)} 
                onClick={() => {
                    // Rotate on click and reset timeout
                    clearTimeout(rotateTimeout);
                    setCurrentDegrees(currentDegrees + degreesY % 360 === 0 ? 0 : currentDegrees + degreesY) 
                }}
                degY={degreesY*children.indexOf(e)}></ImageDiv>)}
            </Carousel>
        </Container>
    )
};

export default Gallery;
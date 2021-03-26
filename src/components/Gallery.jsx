import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import { useState, useEffect } from 'react';


const Container = styled.div`
  margin: 0 auto;
  width: 250px;
  height: 200px;
  position: relative;
  perspective: 1000px;
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
`;

const ImageDiv = styled.img`
    display: block;
    position: absolute;
    height: 280px;
    margin: 0px 5px 0px 5px;
    background: blue;
    transition: 300ms;
    transform: rotateY(${props => props.degY}deg) translateZ(${props => props.translateZ || 0});
    opacity: ${props => props.main ? '1' : '.2'};
`;

const Gallery = (props) => {

    const children = props.children;
    const [currentDegrees, setCurrentDegrees] = useState(0);
    const degreesY = 360 / children.length;
    const rotations = currentDegrees / degreesY;

    setTimeout(() => {
        setCurrentDegrees(currentDegrees + degreesY)
    }, 3000);

    return (
        <Container>
            <Carousel degY={currentDegrees}>
                {children.map(e => <ImageDiv 
                key={children.indexOf(e)} 
                src={e.props.src} 
                translateZ={props.spacing}
                main={(rotations * degreesY % 360 === 0 ? 0 : 360) - rotations * 60 % 360 === degreesY*children.indexOf(e)} 
                degY={degreesY*children.indexOf(e)}></ImageDiv>)}
            </Carousel>
        </Container>
    )
};

export default Gallery;
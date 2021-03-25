import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import { useState } from 'react';


const Container = styled(FlexDiv)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const TestDiv = styled.img`
    height: 50px;
    margin: 0px 5px 0px 5px;
    background: blue;
    transform: ${props => props.a ? `rotate3d(0, 1, 0, 45deg)` : props.c ? `rotate3d(0, 1, 0, -45deg)` : ""};
`;

const Gallery = (props) => {

    let [children, setChildren] = useState(props.children);
    const length = children.length;


    return (
        <Container onClick={() => {
            // scroll gallery
            let clone = Array.from(children);
            clone.unshift(clone.pop())
            setChildren(clone);
        }}>
            {children.map(e => <TestDiv src={e.props.src}></TestDiv>)}
        </Container>
    )
};

export default Gallery;
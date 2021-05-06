import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Gallery.module.scss'


const Gallery = (props) => {
    const children = props.children;
    const [currentDegrees, setCurrentDegrees] = useState(0);
    const degreesY = 360 / children.length;
    const rotations = currentDegrees / degreesY;
    const cn = classNames.bind(styles);
    const width = window.innerWidth;
    const widthNormal = width <= 2150 && width > 1050;
    let rotateTimeout = null;

    // Auto rotate gallery
    const startAutoRotate = () => {
        rotateTimeout = setTimeout(() => {
            setCurrentDegrees(currentDegrees + degreesY % 360 === 0 ? 0 : currentDegrees + degreesY) 
        }, 3000);
    }

  useEffect(() => {
    let isCanceled = false;

    // only update after mount
    if (isCanceled) {
      startAutoRotate();
    }
    
    // Set mounted to true
    return () => {
      isCanceled = true;
    }
  }, []);

    return (
        <div className={cn(styles.container)}>
            <div style={{transform: !widthNormal 
                ? `rotateY(${currentDegrees}deg)`
                : `rotateX(${currentDegrees}deg)`}}>
                {children.map(e => <img 
                className={cn({[styles.main]: (rotations * degreesY % 360 === 0 ? 0 : 360) - rotations * 60 % 360 === degreesY*children.indexOf(e)})}
                style={{transform: !widthNormal
                    ? `rotateY(${degreesY*children.indexOf(e)}deg) translateZ(${props.spacing}px)` 
                    : `rotateX(${degreesY*children.indexOf(e)}deg) translateZ(${props.spacing}px)`}}
                key={children.indexOf(e)} 
                src={e.props.src} 
                onClick={() => {
                    // Rotate on click and reset timeout
                    clearTimeout(rotateTimeout);
                    setCurrentDegrees(currentDegrees + degreesY % 360 === 0 ? 0 : currentDegrees + degreesY) 
                }}/>)}
            </div>
        </div>
    )
};

export default Gallery;

import classNames from 'classnames/bind';
import styles from './VideoContainer.module.scss';
import ReactPlayer from 'react-player';


const VideoContainer = () => {
  const cn = classNames.bind(styles);

  return (
    <div className={cn(styles.container)}>
      <ReactPlayer className={cn(styles.video)}
        url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      />
    </div>
  )
}

export default VideoContainer;


import classNames from 'classnames';
import styles from './VideoContainer.module.scss';

const VideoContainer = () => {
  const cn = classNames.bind(styles);

  return (
    <div className={cn(styles.container)}>
    </div>
  )
}

export default VideoContainer;


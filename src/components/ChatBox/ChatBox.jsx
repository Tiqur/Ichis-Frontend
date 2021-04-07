import styles from './ChatBox.module.scss';
import classNames from 'classnames';

const ChatBox = () => {
  const cn = classNames.bind(styles);

  return (
    <div className={cn(styles.container)}> </div>
  )
}

export default ChatBox;

import styles from './ChatMessage.module.scss';
import FlexDiv from '../FlexDiv/FlexDiv';

const ChatMessage = () => {
  return (
      <FlexDiv  className={styles.container}>
        <FlexDiv>
          <p>This is a message</p>
        </FlexDiv>
      </FlexDiv>
  )
}

export default ChatMessage;

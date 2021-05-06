import styles from './ChatMessage.module.scss';
import FlexDiv from '../FlexDiv/FlexDiv';
import  { ReactComponent as CrownIcon } from '../../assets/crown.svg';

const ChatMessage = (props) => {
  const name = props.name;
  const text = props.text;
  const operator = props.operator;
  const owner = props.owner;
  const crown = <CrownIcon style={{height: '1em'}} fill={owner ? 'purple' : 'gold'} display={ props.operator || props.owner ? 'initial' : 'none' }/>;
  const username = <p className={styles.username}>{crown} Username:</p>;

  return (
      <FlexDiv  className={styles.container}>
          <p className={styles.message}>{username} This is a messaaaaaaaaaaaaaaaaaaaaaaa wd dawkdajdh adkajdh akjaha dakjdhadkjhge</p>
      </FlexDiv>
  )
}

export default ChatMessage;

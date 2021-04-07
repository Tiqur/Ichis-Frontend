import styles from './ChatBox.module.scss';
import classNames from 'classnames';
import FlexDiv from '../FlexDiv/FlexDiv'

const InputMessage = () => {
  const cn = classNames.bind(styles);

  return (
    <FlexDiv alignCenter className={cn(styles.inputBoxContainer)}>
      <FlexDiv className={cn(styles.inputBox)}>
        
      </FlexDiv>
      <FlexDiv className={cn(styles.iconContainer)}>
        
      </FlexDiv>
    </FlexDiv>
  )
}

const ChatBox = () => {
  const cn = classNames.bind(styles);

  return (
    <FlexDiv column alignCenter className={cn(styles.container)}>
      <FlexDiv column alignCenter className={cn(styles.messageContainer)}>
        <InputMessage />
      </FlexDiv>
    </FlexDiv>
  )
}

export default ChatBox;

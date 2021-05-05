import styles from './ChatBox.module.scss';
import classNames from 'classnames';
import FlexDiv from '../FlexDiv/FlexDiv';
import ChatMessage from '../ChatMessage/ChatMessage.jsx';
import { ReactComponent as SettingsIcon } from '../../assets/Settings.svg';
import { ReactComponent as PermissionsIcon } from '../../assets/Permissions.svg';
import { ReactComponent as AddModeraterIcon } from '../../assets/add_moderator.svg';
const cn = classNames.bind(styles);

const Icons = () => {
  return (
    <FlexDiv className={cn(styles.iconContainer)}>
        <PermissionsIcon />
        <AddModeraterIcon />
        <SettingsIcon />
    </FlexDiv>
  )
}

const InputMessage = () => {
  return (
    <FlexDiv alignCenter className={cn(styles.inputBoxContainer)}>
      <FlexDiv alignCenter className={cn(styles.inputBox)}>
        <div className={cn(styles.inputButton)} />
      </FlexDiv>
    </FlexDiv>
  )
}

const ChatBox = () => {
  return (
    <FlexDiv column alignCenter className={cn(styles.container)}>
      <FlexDiv column alignCenter className={cn(styles.messageContainer)}>
        <Icons />
          { /* Messages go here */ }
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          { /* */ }
        <InputMessage />
      </FlexDiv>
    </FlexDiv>
  )
}

export default ChatBox;

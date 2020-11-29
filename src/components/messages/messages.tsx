import { FC } from "react";
import { MessagesProps } from "./messages.interfaces";
import { MessageStyled, MessagesWrapperStyled, MessageWrapperStyled } from "./messages.styles";

const Chat: FC<MessagesProps> = (props) => {
  const { messages } = props;
  return (
    <MessagesWrapperStyled>
      {messages.map(({id, text, isAuthor}) => (
        <MessageWrapperStyled isAuthor={isAuthor} key={id}>
          <MessageStyled isAuthor={isAuthor}>{text}</MessageStyled>
        </MessageWrapperStyled>
      ))}
    </MessagesWrapperStyled>
  )
};

export default Chat;
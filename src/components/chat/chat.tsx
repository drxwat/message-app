import { FC, useCallback, useRef, useState } from "react";
import { ChatProps } from "./chat.interfaces";
import { ChatTextareaStyled, ChatFormStyled } from "./chat.styles";

const Chat : FC<ChatProps> = (props) => {
  const { onMessageSend } = props;
  const [shiftPressed, setShiftPressed] = useState(false);
  const [textareaValue, setTextareaValue] = useState<string>('');
  const handleMessageSend = useCallback((event) => {
    event.preventDefault();
    if (!textareaValue.length) {
      return;
    }
    onMessageSend(textareaValue)
    setTextareaValue('');
  }, [textareaValue, setTextareaValue, onMessageSend]);
  return (
    <ChatFormStyled 
      onSubmit={handleMessageSend} 
      onKeyDown={(event) => {
        if (event.key === 'Shift') {
          setShiftPressed(true);
          return true;
        }
        if (!shiftPressed && event.key === 'Enter') {
          handleMessageSend(event);
        }
      }} 
      onKeyUp={(event)=> event.key === 'Shift' && setShiftPressed(false)}>
      <ChatTextareaStyled value={textareaValue} onChange={(event) => setTextareaValue(event.target.value)}></ChatTextareaStyled>
      <button type="submit">Send</button>
    </ChatFormStyled>
  )
}

export default Chat;
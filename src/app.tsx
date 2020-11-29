import { FC, useCallback, useState } from "react";
import { AppFriendsWrapperStyled, AppMainStyled, AppMessagerWrapperStyled, AppSelectedFriendStyled, AppSelectedFriendNameStyled } from "./app.styles";
import Messages from "./components/messages/messages";
import Friends from "./components/friends/friends";
import { Friend, Message } from "./core/models";
import Chat from "./components/chat/chat";
import { generateRandomID } from "./core/helpers";
import { FriendIsOnlineStyled } from "./components/friends/friends.styles";

const DuckID = 'qwe-asd';
const JaneID = 'asd-bas';

const friends: Friend[] = [
  { id: DuckID, name: 'Duck', isOnline: false, status: 'Always!' },
  { id: JaneID, name: 'Jane', isOnline: true, status: 'Never' }
];

const friend2messages : Map<string, Message[]> = new Map([
  [DuckID, [ 
    { id: 'aaa', text: 'Hi John! How are you?', isAuthor: false },
    { id: '12', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'b2bb', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'bbsb', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'bb3b', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'bsbb', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'bxbb', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'babb', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'bbdb', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'bbfb', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'babb', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'asda', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'adsd', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'dda', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },
    { id: 'sssa', text: 'Hey Duck. Thanks for asking. I\'m good.', isAuthor: true },


  ]],
  [JaneID, [ 
    { id: 'asd', text: 'Hi Jane! Have you senn this movie ...', isAuthor: false },

  ]]
]);

const App : FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend>();
  const [messages, setMessages] = useState<Message[]>([]);
  const handleFriendSelection = useCallback((friendID: string) => {
    setSelectedFriend(friends.find((f) => f.id === friendID));
    setMessages(friend2messages.get(friendID) || []);
  }, [setSelectedFriend]);
  const handleMessageSend = useCallback((text: string) => {
    if (!selectedFriend) {
      return;
    }
    if (!friend2messages.has(selectedFriend.id)) {
      friend2messages.set(selectedFriend.id, []);
    }
    const messages: Message[] = [...friend2messages.get(selectedFriend.id) as Message[], {
      id: generateRandomID(),
      text,
      isAuthor: true,
    }];
    friend2messages.set(selectedFriend.id, messages);
    setMessages(messages);
  }, [selectedFriend]);

  return (
    <AppMainStyled>
      <AppFriendsWrapperStyled>
        <Friends friends={friends} onFrienSelection={handleFriendSelection} selectedId={selectedFriend?.id}></Friends>
      </AppFriendsWrapperStyled>
      <AppMessagerWrapperStyled>
        {selectedFriend && (
          <>
            <AppSelectedFriendStyled>
              <AppSelectedFriendNameStyled>{selectedFriend.name}</AppSelectedFriendNameStyled>
              <FriendIsOnlineStyled isOnline={selectedFriend.isOnline}></FriendIsOnlineStyled>
            </AppSelectedFriendStyled>
            <Messages messages={messages}></Messages>
            <Chat onMessageSend={handleMessageSend}></Chat>
          </>
        )}
        {!selectedFriend && <span>Please select a friend to start messaging</span>}
      </AppMessagerWrapperStyled>
    </AppMainStyled>
  )
};

export default App;

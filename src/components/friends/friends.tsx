import { FC } from "react";
import { FriendNameStyled, FriendIsOnlineStyled, FriendStyled, FriendsWpapperStyled, FriendStatusStyled } from "./friends.styles";
import { FriendsProps } from "./frients.interfaces";

const Friends: FC<FriendsProps> = (props) => {
  const { friends, selectedId, onFrienSelection } = props;
  return (
    <FriendsWpapperStyled>
      {friends.map(({ id, name, status, isOnline }) => (
        <FriendStyled
          onClick={() => onFrienSelection && onFrienSelection(id)}
          isSelected={typeof selectedId === 'string' && selectedId === id}
          key={id} >
          <FriendIsOnlineStyled isOnline={isOnline}></FriendIsOnlineStyled>
          <FriendNameStyled>{name}</FriendNameStyled>
          <FriendStatusStyled>{status}</FriendStatusStyled>
        </FriendStyled>
      ))}
    </FriendsWpapperStyled>)
}

export default Friends;
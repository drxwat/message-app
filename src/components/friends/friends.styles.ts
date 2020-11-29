import styled from "styled-components";

export const FriendsWpapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px dashed;
`;

export const FriendStyled = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#bfbfbf' : '#ffffff'};
  &:hover {
    background-color: ${props => props.isSelected ? '#bfbfbf' : '#e8e8e8'};
  }
`;

export const FriendIsOnlineStyled = styled.div<{ isOnline?: boolean}>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${props => props.isOnline ? 'green' : 'red'};
`;

export const FriendNameStyled = styled.div`
  font-weight: bold;
  margin: 10px;
`;

export const FriendStatusStyled = styled.div`
    margin: 10px;
    font-style: italic;
`;
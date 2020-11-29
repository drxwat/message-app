import styled from "styled-components";

export const AppMainStyled = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100%;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  width: 1000px;
  height: 100%;
`;

export const AppFriendsWrapperStyled = styled.div`
  flex-grow: 1;
  background: #fefefe;
  padding: 10px;
  box-sizing: border-box;
`;

export const AppMessagerWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 10px;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  background: #fefefe;
`;

export const AppSelectedFriendStyled = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px dashed;
`;

export const AppSelectedFriendNameStyled = styled.span`
  padding: 10px;
`;
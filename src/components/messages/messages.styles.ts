import styled from "styled-components";

export const MessagesWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

export const MessageWrapperStyled = styled.div<{ isAuthor?: boolean }>`
  padding: 10px;
  margin: 10px;
  text-align: ${props => props.isAuthor ? 'right' : 'left'};
`;

export const MessageStyled = styled.span<{ isAuthor?: boolean }>`
  display: inline-block;
  margin: 0px;
  padding: 10px;
  border-radius: 15px;
  background-color: ${props => props.isAuthor ? '#e7f4e7' : '#e8e8e8'};
  white-space: pre-wrap;
`;
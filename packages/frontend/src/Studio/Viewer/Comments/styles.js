import styled from 'styled-components';
import { Avatar } from '../styles';
import { MainText, SmallText } from '../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 5px;
`;

export const Comment = styled.div`
  display: flex;
  margin-top: 14px;
`;

export const CommentAvatar = styled(Avatar)`
  height: ${props => props.theme.commentAvatarHeight}px;
  margin-right: 5px;
`;

export const Right = styled.div`
  margin-left: 4px;
`;

export const Time = styled(SmallText)`
  margin-left: 10px;
`;

export const Content = styled(MainText)`
  margin-top: 2px;
`;

export const AuthorNameTime = styled.div`
  display: flex;
  align-items: flex-end;
`;

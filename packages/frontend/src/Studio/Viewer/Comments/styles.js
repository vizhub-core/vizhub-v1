import styled from 'styled-components';
import { Avatar } from '../styles';

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

export const Left = styled.div``;
export const Right = styled.div`
  margin-left: 4px;
`;

export const UserName = styled.span`
  font-weight: bold;
`;

export const Time = styled.span`
  margin-left: 15px;
  font-size: 0.8em;
`;

export const Content = styled.div`
  margin-top: 2px;
`;

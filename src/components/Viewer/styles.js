import styled from 'styled-components';

export const headerHeight = 32;
export const infoAvatarHeight = 64;

export const ViewerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: ${headerHeight}px;
`;

export const Runner = styled.div`
  height: 300px;
  background-color: #ddd;
`;

export const InfoActions = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderAvatar = styled(Avatar)`
  height: ${headerHeight}px;
  cursor: pointer;
`;

export const InfoAvatar = styled(Avatar)`
  height: ${infoAvatarHeight}px;
`;

export const InfoWrapper = styled.div`
  display: flex;
`;

export const OwnerNamePublishDate = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OwnerName = styled.div`
  font-weight: bold;
  line-height: 1.6em;
`;

export const PublishDate = styled.div`
  color: #11111199;
  font-size: 0.9em;
`;

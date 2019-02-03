import styled from 'styled-components';

export const headerHeight = 32;

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

export const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderAvatar = styled(Avatar)`
  height: ${headerHeight}px;
  cursor: pointer;
`;

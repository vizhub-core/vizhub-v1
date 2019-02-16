import styled from 'styled-components';

export const headerHeight = 32;

export const Padded = styled.div`
  padding: 5px;
`;

export const Header = styled.div`
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

export const Description = styled.div`
  margin-top: 10px;
`;

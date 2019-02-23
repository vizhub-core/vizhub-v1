import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 980px;
`;

export const Padded = styled.div`
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: ${props => props.theme.headerHeight}px;
`;

export const Runner = styled.div`
  height: 300px;
  background-color: #ddd;
`;

//const mobile = '500px';

//export const InfoActions = styled.div`
//  display: flex;
//  justify-content: space-between;
//  @media (max-width: ${mobile}) {
//    flex-direction: column;
//  }
//`;

export const Spaced = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TitleViewCount = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.3em;
  margin-bottom: 2px;
  color: ${props => props.theme.textMain};
`;

export const ViewCount = styled.div`
  font-size: 0.8em;
  color: ${props => props.theme.textLight};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderAvatar = styled(Avatar)`
  height: ${props => props.theme.headerHeight}px;
  cursor: pointer;
`;

export const Description = styled.div`
  margin-top: 10px;
  font-size: 1.1em;
`;

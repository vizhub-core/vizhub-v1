import styled from 'styled-components';

export const MainText = styled.div`
  color: ${props => props.theme.textMain};
`;

export const SmallText = styled.div`
  font-size: 0.8em;
  color: ${props => props.theme.textLight};
`;

export const Wrapper = styled.div`
  max-width: 980px;
`;

export const Padded = styled.div`
  padding: 8px;
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

export const Title = styled(MainText)`
  font-size: 1.5em;
  margin-bottom: 2px;
`;

export const TitleActions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TitleViewCount = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderAvatar = styled(Avatar)`
  height: ${props => props.theme.headerHeight}px;
  cursor: pointer;
`;

// Aligns the description to match the author name.
const authorAlign = ({ theme }) =>
  theme.infoAvatarHeight + theme.infoAvatarPadding;

export const Description = styled(MainText)`
  font-size: 1.1em;
  @media (min-width: 700px) {
    margin-left: ${authorAlign}px;
  }
`;

export const Provenance = styled.div`
  margin: 10px 0px 4px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const AuthorName = styled.div`
  color: ${props => props.theme.textMain};
  font-weight: bold;
`;

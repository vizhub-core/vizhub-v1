import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Action = styled.button`
  font-size: 1em;
  background: white;
  margin: 2px 0 2px 4px;
  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 1em;
  vertical-align: text-bottom;
`;

export const ForkedFrom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

export const ForkedFromText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.9em;
  margin-right: 5px;
`;

export const ForkedFromViz = styled.div`
  width: 160px;
  height: 64px;
  background-color: #ddd;
`;

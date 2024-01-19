import styled from 'styled-components';
export const SearchBox = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Due = styled.div`
  color: #267cb5;
  font-size: 14px;
  font-weight: 600;
`;
export const TaskDown = styled.div`
  display: flex;
`;
export const Status = styled.div`
  width: 30%;
`;
export const TaskBody = styled.div`
  max-height: 180px;
  overflow: hidden;
  word-wrap: break-word;
  color: #54371b;
  font-size: 16px;
`;
export const TaskData = styled.div`
  margin-top: auto;
  color: #267cb5;
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`;
export const TaskHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;
export const TaskIndex = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background: white;
  border-radius: 50%;
  font-size: 14px;
  color: black;
`;
export const TaskPriority = styled.span`
  margin-left: 50px;
  font-size: 16px;
`;
export const TaskInfo = styled.div`
  width: 100%;
  padding: 10px;
  flex-grow: 1;
  overflow: hidden;
`;

export const TaskTitle = styled.h1`
  font-size: 18px;
  border-bottom: 2px dashed #ab907f;
  color: #ab907f;
  margin-bottom: 5px;
  max-height: 70px;
  overflow: hidden;
  word-wrap: break-word;
`;

export const TaskComponentContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #cccccc;
  padding: 10px;
  margin: 0 0 3px 0;
  border-radius: 5px;
  box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.3);

  & :hover,
  :focus,
  :active {
    cursor: pointer;
  }
`;

export const TaskHidden = styled.div`
  width: 20%;
  height: 30px;
  display: flex;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-left: auto;

  &:hover,
  :focus,
  :active {
    opacity: 1;
  }
`;

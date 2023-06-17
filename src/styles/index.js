import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 text-decoration: none;
 outline: none;
 font-family: 'Poppins', sans-serif;
}`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* max-height: 100vh; */
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #da2535;
  }
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #da2535;

  &::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #da2535;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  width: 112px;
  height: 50px;
  background: #da2535;
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fbfbfb;
  cursor: pointer;

  &:hover{
      opacity: .8;
    }

    &:active{
      opacity: .6;
    }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 10px 13px 24px;
  width: 354px;
  min-height: 50px;
  background: ${(props) => props.checked ? "#da2535" : "#FFFFFF"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  color: #ffffff;
  flex-wrap: wrap;
  
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => props.checked ? "line-through" : ""};
    color: ${(props) => props.checked ? "#FFFFFF" : "#000000"};

    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover{
      opacity: .8;
    }

    &:active{
      opacity: .6;
    }

  }

  i {
    color: ${(props) => props.checked ? "#FFFFFF" : "#000000"};
    font-size: 24px;
  }
`;

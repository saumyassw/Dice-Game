import styled from "styled-components";



export const Button = styled.button`
  color: white;
  padding: 10px 20px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solod black;
    color: black;
    transition: 0.3s background ease-in;
  }
`; 



export const OutlineButton = styled(Button)`
border: 1px solid black;
color: black;
background-color: white;
&:hover {
  background-color: black;
  border: 1px solod transparent;
  color: white;
 }
 `;
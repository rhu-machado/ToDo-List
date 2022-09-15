import styled, { createGlobalStyle } from "styled-components";
/*import Muro from './Image/muro-preto.jpg';*/

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background-color:#101010;
  color:teal;
  list-style:none;
}
`;

export const Contain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height:100vh;
  background: url("https://img.freepik.com/free-photo/brick-wall-background_53876-88654.jpg?size=874&ext=jpg&ga=GA1.2.1949077808.1663266639");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: teal;
  background-color:rgba(0,0,0,0.4);
  height: 15vh;
  padding:10px;
  font-size: 3rem;
  text-shadow: 2.95px 2.95px 4.6px rgba(255, 255, 255, 0.25),
    4px 4px 6px rgba(0, 80, 80, 0.5);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 1%;
  border: double 6px;
  margin-bottom: 10vh;
  box-shadow: rgba(0, 80, 80, 0.4) 0px 5px, rgba(0, 80, 80, 0.3) 0px 10px,
    rgba(0, 80, 80, 0.2) 0px 15px, rgba(0, 80, 80, 0.1) 0px 20px,
    rgba(0, 80, 80, 0.05) 0px 25px;

  button {
    background-color: whitesmoke;
    padding: 1px 5px 1px 5px;
    margin-left: 5px;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
  }
  button:hover {
    background-color: lightgray;
  }

  input {
    background-color: whitesmoke;
    padding: 2px 5px;
  }
`;

export const BackList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(150, 150, 150, 0.6);
  width: 80vw;
  padding: 3%;
  margin: 1%;
  border-radius: 10px;
`;

export const BoxList = styled.div`
  border: solid 1px;
  border-radius: 5px;
  background-color: teal;
  margin-top: 1vh;
  padding: 2%;
  width: 65vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: rgb(0, 80, 80) 0px 20px 30px -10px;

  li {
    color: #fff;
    background-color: teal;
  }

  button {
    color: red;
    background-color: teal;
    width: 3%;
    padding: 1px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 900;
  }
`;

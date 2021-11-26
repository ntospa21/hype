import {createGlobalStyle } from 'styled-components';

 export const GlobalStyle = createGlobalStyle 
 `
.square {
  display: flex;
  flex-direction: row;
  margin-left: -35vh;
}

.buttons {
  margin-left: 50vh;
  margin-top: 20px;
}

.btn {
  width: 100px;
  height: 30px;
  border-radius: 50px;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  background-color: #0c6cf9;
  color: azure;
}

.btn:hover {
  transform: scale(1);
  color: #0c6cf9;
  background-color: azure;
}

.container {
  flex-direction: row;
  float: left;
  clear: none;
}
.deutero {
  margin-left: 110vh;
  margin-top: -60vh;
}
.trito {
  margin-top: 10vh;
}
.tree {
  margin-right: 150px;
}

.toggler {
  margin-right: 20vh;
  margin-top: -25vh;
}

.chartaki {
  height: 650px;
  width: 650px;
  margin-left: 85vh;
  margin-top: -50vh;
}

`
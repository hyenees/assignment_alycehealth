import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
*{
    margin: 0px;
    padding: 0px;
    box-sizing:border-box;
}
body {
  font-size: 16px;
  line-height:1.5;
}   
ol,
ul,
li {
  list-style: none;
}

input {
  font-size: 14px;
}

input:focus,
button:focus,
select:focus,
textarea:focus {
  outline: none;
}

button{
  cursor : pointer;
  border: none;
}
`;

export default GlobalStyle;

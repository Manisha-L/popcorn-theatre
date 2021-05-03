import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    a{
      text-decoration: none;
      color: white;
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    .loginreglogo {
      width:200px;
      height:100px;
    }
    .loginreglogo img{
      width:100%;
      height:80px;
      margin-left:30px;
    }

    .userlogo-wrapper{
      width:200px;
      height:100px;
    }

    .userlogo-wrapper img{
      width:100%;
      height:100px;
    }

  }
`;

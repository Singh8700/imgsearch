import {createGlobalStyle} from "styled-components"
export const GlobalStyled = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: #fff;
  background-color: #000;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
body {
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
.container {
  width: 80vw;
  margin: 0 auto;
  overflow-x:hidden;
}
input{
  width:300px;
  border-radius:1rem;
  font-size:4rem;
  padding:0.5rem 1rem;
}
h1,h2,h3,h4,h5,h6{
  font-size:3.5rem;
  font-weight:600;
  color:#09a;
  font-family: Georgia;
  word-break:all;
  text-shadow:2px 2px 4px #000;
}
h1{
  font-size:5rem;
  font-weight:1000;
  color:#fff;
}
h5,h3{
  font-size:2.5rem;
  color:#999;
}
h6{
  font-size:2rem;
  color:#fff;
}
.flex{
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
}
.flex-col{
  flex-direction:column;
}
.grid{
  width:100%;
  display:grid;
  grid-template-columns: 1fr;
  justify-content:space-around;
  align-items:center;
  gap:5rem;
}
.grid-two-col{
  grid-template-columns: repeat(2,1fr);
}
.grid-three-col{
  grid-template-columns: repeat(3,1fr);
}
.grid-four-col{
  grid-template-columns: repeat(4,1fr);
}
.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}
.heading{
  text-align:center;
  width:50%;
}
a {
  font-weight: 500;
  font-size:4rem;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}
body,html {
 font-size:62.5%;
  min-width: 320px;
  min-height: 100vh;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.5em 0.4em;
  margin:0.5rem auto;
  font-size: 1.4rem;
  text-shadow:2px 2px 4px #000;
  font-weight: 500;
  font-family: Georgia;
  background-color: #4a4a4a;
  cursor: pointer;
  transition: border-color 0.5s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.textHighlight {
  padding:0 10px;
  h1{
    width:80%;
    background:rgba(0,0,0,0.2);
    margin:0 auto;
  }
  h4,h5{
    text-align: center;
    font-size:2rem;
    margin: 0 auto;
  }
  
  h5{
    margin-bottom:3rem;
    font-size:1.5rem;
  }
}
@media (prefers-color-scheme: light) {
  :root {
    color: #000;
    background-color: #fff;
  }
  .heading{
    color:#000;
  }
  a:hover {
    color: #747bff;
    font-size:4.5rem;
  }
  button {
    background-color: #f9f9f9;
  }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    overflow-x:hidden;
 }
  .heading{
    font-size:2.2rem;
    word-break:all;
    text-align:center;
    width:100%;
    margin:2rem auto;
  }
  .grid{
    grid-template-columns: 1fr;
  }
  .grid-two-col, 
  .grid-three-col, 
  .grid-four-col{
    grid-template-columns: repeat(2,1fr);
     }
    }
    input{
      width:100%;
      font-size:2.5rem;
      
      padding:0.4rem 1.5rem;
    }
    
  }
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 62.5%;
    }
    .grid{
     gap: 3.2rem;
     grid-template-columns: 1fr;
    }
    .grid-two-col , 
    .grid-three-col, 
    .grid-four-col{
      grid-template-columns: 1fr;
     }
    }

      
    }
`;
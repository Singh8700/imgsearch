
import {ThemeProvider} from "styled-components"
import {GlobalStyled} from "./templates/GlobalStyled"
import Home from "./components/home/Home"

const App=()=> {
 const theme={
   colors:{
     bg:"red"
   },
   media:{
     mobile:"780px",
     tab:"990px",
     small:"480px"
   }
 }
  return(
    <ThemeProvider theme={theme}>
    <GlobalStyled/>
    <div className="container textHighlight flex flex-col" id="sections">
    <h1 className="heading">
    Images Search Very-Easy :)
    </h1>
    <h4>Provide by UnSplash.com</h4>
    <h5>Create By Rohit</h5>
    </div>
    <Home/>
    </ThemeProvider>
  )
}

export default App
  
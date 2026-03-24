import { Outlet } from "react-router-dom"
import {Header,Footer} from "./Index/Index"


function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App

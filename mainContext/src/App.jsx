import Login from "./components/Login"
import Profile from "./components/progile"
import UserContextProvider from "./Context/UserContextProvider"

function App() {

  return ( 
    <UserContextProvider>
    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, deserunt?</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>  
  )
}

export default App
 

import { GlobalProvider } from "./Context/GlobalContext"
import Home from "./Pages/Home"
function App() {

  return (
    <>
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    </>


  )
}

export default App

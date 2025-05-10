import { BrowserRouter,Routes,Route } from "react-router-dom"
import { GlobalProvider } from "./Context/GlobalContext"
import Home from "./Pages/Home"
import DetailsPage from "./Pages/DetailsPage"
function App() {

  return (
    <>
 
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>


  )
}

export default App

import { BrowserRouter,Routes,Route } from "react-router-dom"
import { GlobalProvider } from "./Context/GlobalContext"
import Home from "./Pages/Home"
import DetailsPage from "./Pages/DetailsPage"
import ComparatorPage from "./Pages/ComparatorPage"
import FavouritePage from "./Pages/FavouritePage"
function App() {

  return (
    <>
 
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<DetailsPage />} />
            <Route path="/Compare" element={<ComparatorPage />} />
            <Route path="/Favourite" element={<FavouritePage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>


  )
}

export default App

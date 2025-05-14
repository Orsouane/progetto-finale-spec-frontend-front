import { BrowserRouter,Routes,Route } from "react-router-dom"
import { GlobalProvider } from "./Context/GlobalContext"
import DetailsPage from "./Pages/DetailsPage"
import ComparatorPage from "./Pages/ComparatorPage"
import FavouritePage from "./Pages/FavouritePage"
import DefaultLayout from "../Layout/DefaultLayout"
import RecordsList from "./Components/RecordsList"
function App() {

  return (
    <>
 
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route  element={<DefaultLayout />} > 
            <Route path="/" element={<RecordsList/>}/>
            <Route path="/games/:id" element={<DetailsPage />} />
            <Route path="/Compare" element={<ComparatorPage />} />
            <Route path="/Favourite" element={<FavouritePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>


  )
}

export default App

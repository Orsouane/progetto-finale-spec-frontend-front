import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./Context/GlobalContext"
import { FavouriteProvider } from "./Context/FavouriteContext"
import { CompareProvider } from "./Context/CompareContext"
import DetailsPage from "./Pages/DetailsPage"
import ComparatorPage from "./Pages/ComparatorPage"
import FavouritePage from "./Pages/FavouritePage"
import DefaultLayout from "./Layout/DefaultLayout"
import RecordsList from "./Pages/RecordsList"
function App() {

     return (
          <>

               <GlobalProvider>
                    <FavouriteProvider>
                         <CompareProvider>
                              <BrowserRouter>
                                   <Routes>
                                        <Route element={<DefaultLayout />} >
                                             <Route path="/" element={<RecordsList />} />
                                             <Route path="/games/:id" element={<DetailsPage />} />
                                             <Route path="/Compare" element={<ComparatorPage />} />
                                             <Route path="/Favourite" element={<FavouritePage />} />
                                        </Route>
                                   </Routes>
                              </BrowserRouter>
                         </CompareProvider>
                    </FavouriteProvider>
               </GlobalProvider>
          </>


     )
}

export default App

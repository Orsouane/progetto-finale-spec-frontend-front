import React, { Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DetailsSkeleton from "./Skeleton/DetailsSkeleton"
import FavouriteSkeleton from "./Skeleton/FavouriteSkeleton";
import RecordsSkeleton from "./Skeleton/RecordsSkeleton"
import ComparatorSkeleton from "./Skeleton/ComparatorSkeleton"
import { GlobalProvider } from "./Context/GlobalContext";
import {FavouriteProvider} from "./Context/FavouriteContext"
import {CompareProvider} from "./Context/CompareContext" 
import  DefaultLayout from "./Layout/DefaultLayout"
const RecordsList = React.lazy(() => import("./Pages/RecordsList"));
const DetailsPage = React.lazy(() => import("./Pages/DetailsPage"));
const ComparatorPage = React.lazy(() => import("./Pages/ComparatorPage"));
const FavouritePage = React.lazy(() => import("./Pages/FavouritePage"));

function App() {
     return (
          <GlobalProvider>
               <FavouriteProvider>
                    <CompareProvider>
                         <BrowserRouter>
                              <Routes>
                                   <Route element={<DefaultLayout />}>
                                        <Route
                                             path="/"
                                             element={
                                                  <Suspense fallback={<RecordsSkeleton />}>
                                                       <RecordsList />
                                                  </Suspense>
                                             }
                                        />
                                       <Route
                                             path="/games/:id"
                                             element={
                                                  <Suspense fallback={<DetailsSkeleton />}>
                                                       <DetailsPage />
                                                  </Suspense>
                                             }
                                        /> 
                                      
                                     <Route
                                             path="/Compare"
                                             element={
                                                  <Suspense fallback={<ComparatorSkeleton />}>
                                                       <ComparatorPage />
                                                  </Suspense>
                                             }
                                        />
                                      
                                        <Route
                                             path="/Favourite"
                                             element={
                                                  <Suspense fallback={<FavouriteSkeleton />}>
                                                       <FavouritePage />
                                                  </Suspense>
                                             }
                                        />
                                   </Route>
                              </Routes>
                         </BrowserRouter>
                    </CompareProvider>
               </FavouriteProvider>
          </GlobalProvider>
     );
}

export default App;

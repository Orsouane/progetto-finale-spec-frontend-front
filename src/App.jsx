import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsSkeleton from "./Skeleton/DetailsSkeleton";
import FavouriteSkeleton from "./Skeleton/FavouriteSkeleton";
import RecordsSkeleton from "./Skeleton/RecordsSkeleton";
import ComparatorSkeleton from "./Skeleton/ComparatorSkeleton";
import { GlobalProvider } from "./Context/GlobalContext";
import { FavouriteProvider } from "./Context/FavouriteContext";
import { CompareProvider } from "./Context/CompareContext";
import DefaultLayout from "./Layout/DefaultLayout";
import ErrorPage from "./Components/UiComponents/ErrorPage";
import ServerError from "./Components/UiComponents/ServerError";

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
                                             path="/:slug"
                                             element={
                                                  <Suspense fallback={<DetailsSkeleton />}>
                                                       <DetailsPage />
                                                  </Suspense>
                                             }
                                        />
                                        <Route
                                             path="/Compare/:slug"
                                             element={
                                                  <Suspense fallback={<ComparatorSkeleton />}>
                                                       <ComparatorPage />
                                                  </Suspense>
                                             }
                                        />
                                        <Route path="/ErrorPage" element={<ErrorPage />} />
                                        <Route path="/ServerError" element={<ServerError />} />
                                        <Route
                                             path="/Favorite"
                                             element={
                                                  <Suspense fallback={<FavouriteSkeleton />}>
                                                       <FavouritePage />
                                                  </Suspense>
                                             }
                                        />
                                        <Route path="*" element={<ErrorPage />} />
                                   </Route>
                              </Routes>
                         </BrowserRouter>
                    </CompareProvider>
               </FavouriteProvider>
          </GlobalProvider>
     );
}

export default App;


import React, { useContext, useEffect, useState } from 'react'
import { CompareContext } from '../Context/CompareContext'
import EmptyPage from '../Components/UiComponents/EmptyPage';

function ComparatorPage() {
  const { gameCompare1, gameCompare2 } = useContext(CompareContext);
  const chiaveComparator = ["title", "rating", "releaseYear", "price"];

  const [savedGameCompare1, setSavedGameCompare1] = useState(null);
  const [savedGameCompare2, setSavedGameCompare2] = useState(null);
  const [messageEmptyPage, setMessageEmptyPage] = useState("");

  useEffect(() => {
    if (gameCompare1) sessionStorage.setItem("gameCompare1", JSON.stringify(gameCompare1));
    if (gameCompare2) sessionStorage.setItem("gameCompare2", JSON.stringify(gameCompare2));
    setSavedGameCompare1(JSON.parse(sessionStorage.getItem("gameCompare1")));
    setSavedGameCompare2(JSON.parse(sessionStorage.getItem("gameCompare2")));
  }, [gameCompare1, gameCompare2]);

  useEffect(() => {
    if (!gameCompare1 || !gameCompare2) {
      setMessageEmptyPage("You need to select 2 games to compare");
    } else {
      setMessageEmptyPage("");
    }
  }, [gameCompare1, gameCompare2]);

  return (
    <section className=' mx-2 sm:mx-4'>
      {savedGameCompare1 && savedGameCompare2 ? (
        <section className='max-w-[800px] m-auto text-xs sm:text-base mt-2'>
          <section className=' flex justify-between gap-2 '>
               {/* Card 1  */}
            <div className='text-sm max-w-92 shadow-2xl bg-[#1F2937] p-1 sm:p-2 rounded-md hover:border-[#8E95A2] hover:transform hover:-translate-y-1 transition-all duration-300 ease-out border border-gray-700/80 backdrop-blur-sm h-92 sm:h-full'>
              <div className='text-white text-center rounded-md py-1 mt-2 px-2 bg-[#0F1923]/50 m-auto my-2 shadow-2xl border border-stone-700 w-fit'>Game 1</div>
              <img src={savedGameCompare1.imagesExtra[0]} className='border-[#8E95A2] border shadow-2xl h-48 sm:h-64 w-92' alt='image of the fisrt game to compare' />
              <div className='grid sm:grid-cols-2 gap-2 pt-2'>
                {chiaveComparator.map((el, index) => (
                  <p key={index}>
                    <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                    <span className='text-white'> {savedGameCompare1[el]} </span>
                  </p>
                ))}
              </div>
            </div>
                     {/* Card 2  */}
                           <div className='text-sm max-w-92 shadow-2xl bg-[#1F2937] p-1 sm:p-2 rounded-md hover:border-[#8E95A2] hover:transform hover:-translate-y-1 transition-all duration-300 ease-out border border-gray-700/80 backdrop-blur-sm h-92 sm:h-full'>
              <div className='text-white text-center rounded-md py-1 mt-2 px-2 bg-[#0F1923]/50 m-auto my-2 shadow-2xl border border-stone-700 w-fit'>Game 2</div>
                                <img src={savedGameCompare2.imagesExtra[0]} className='border-[#8E95A2] border shadow-2xl h-48 sm:h-64 w-92' alt='image of the second game to compare' />
              <div className='grid sm:grid-cols-2 gap-2 pt-2'>
                {chiaveComparator.map((el, index) => (
                  <p key={index}>
                    <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                    <span className='text-white'> {savedGameCompare2[el]} </span>
                  </p>
                ))}
              </div>
            </div>
          </section>
             {/* Parag */}
          <section className='my-5 sm:my-10'>
            <div className='bg-[#1F2937] p-2 text-white max-w-[800px] m-auto rounded-md text-xs sm:text-base border-[#8E95A2]/20 border shadow-2xl'>
              <div className='text-white text-center flex gap-1 rounded-md px-5 py-1 w-fit bg-[#0F1923]/50 m-auto mb-2 shadow-2xl border border-stone-700 justify-center'>Games Overview</div>
              <p>{savedGameCompare1.title} is {savedGameCompare1.description} developed by {savedGameCompare1.developer} and released in {savedGameCompare1.releaseYear}. On the other hand, {savedGameCompare2.title} is {savedGameCompare2.description} developed by {savedGameCompare2.developer} and released in {savedGameCompare2.releaseYear}.</p>
            </div>
                 {/* Compare Table */}
            <div className='w-fit m-auto mt-5 sm:mt-10 bg-[#1F2937] p-3 rounded-md border-[#8E95A2]/20 border'>
              <div className='text-white text-center flex gap-1 rounded-md p-1 bg-[#0F1923]/50 m-auto mb-2 shadow-2xl border border-stone-700 justify-center'>
                {savedGameCompare1.title} <span className='px-2 permanent-marker-regular'>Vs</span> {savedGameCompare2.title}
              </div>
              <table className='max-w-[450px] h-40 sm:h-58 text-center border-[#8E95A2]/20 border m-auto'>
                <thead className='border-[#8E95A2]/20 border shadow-2xl'>
                  <tr className='text-[#60A5FA]'>
                    <th>Game :</th>
                    <th className='w-38 p-2'>{savedGameCompare1.title}</th>
                    <th className='w-38'>{savedGameCompare2.title}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-[#60A5FA] px-10'><strong>Rating</strong></td>
                    <td className={`text-white ${ savedGameCompare1.rating < savedGameCompare2.rating ? 'bg-red-500' : 'bg-green-500' } `}>
                      {savedGameCompare1.rating}
                    </td>
                    <td className={`text-white ${ savedGameCompare2.rating < savedGameCompare1.rating ? 'bg-red-500' : 'bg-green-500' } `}>
                      {savedGameCompare2.rating}
                    </td>
                  </tr>
                  <tr className='border-[#8E95A2]/20 border shadow-2xl'>
                    <td className='text-[#60A5FA]'><strong>Price</strong></td>
                    <td className={`text-white ${ savedGameCompare1.price > savedGameCompare2.price ? 'bg-red-500' : 'bg-green-500' } `}>
                      {savedGameCompare1.price}
                    </td>
                    <td className={`text-white ${ savedGameCompare2.price > savedGameCompare1.price ? 'bg-red-500' : 'bg-green-500' } `}>
                      {savedGameCompare2.price}
                    </td>
                  </tr>
                  <tr className='border-[#8E95A2]/20 border shadow-2xl'>
                    <td className='text-[#60A5FA]'><strong>ReleaseYear</strong></td>
                    <td className={`text-white ${ savedGameCompare1.releaseYear < savedGameCompare2.releaseYear ? 'bg-red-500' : 'bg-green-500' } `}>
                      {savedGameCompare1.releaseYear}
                    </td>
                    <td className={`text-white ${ savedGameCompare2.releaseYear < savedGameCompare1.releaseYear ? 'bg-red-500' : 'bg-green-500' } `}>
                      {savedGameCompare2.releaseYear}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      ) : <EmptyPage messageEmptyPage={messageEmptyPage} />}
    </section>
  )
}

export default ComparatorPage;


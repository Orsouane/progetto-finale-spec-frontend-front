import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import EmptyPageCompare from "../Components/UiComponents/EmptyPageCompare"
function ComparatorPage() {
    const { records, compare, compare2 } = useContext(GlobalContext);
    const chiaveComparator = ["title", "rating", "releaseYear", "price"]
    const firstElement = records.find(el => el.title === compare);
    const secondElement = records.find(el => el.title === compare2);

    return (
        <section className='w-full m-auto '>
            <section className='flex justify-center gap-100  w-[1600px] m-auto mt-20'>
                
                <div className=' p-2 rounded-md'>
                    {firstElement && secondElement ? (
                        <div className='flex  gap-50'>

                      
                          <div className='bg-[#1F2937]  p-3 rounded-md text-sm w-92 '>
                    <img src={firstElement.image} />
                                <div className='grid grid-cols-2 gap-2  pt-2'>
                        {chiaveComparator.map((el, index) => <p key={index} className=''>

                            <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                            <span className='text-white'> {firstElement[el]} </span>

                        </p>

                        )}
                    </div>
                    </div>
                        
                        
                <div className='bg-[#1F2937] p-2 rounded-md'>
                  
                       
                            <div className='bg-[#1F2937] w-92  p-3 rounded-md text-sm '>
                                <img src={secondElement.image} />
                                <div className='grid grid-cols-2 gap-2   pt-2'>
                                    {chiaveComparator.map((el, index) => <p key={index} className=''>

                                        <span className='text-[#60A5FA]'>{el.charAt(0).toUpperCase() + el.slice(1)} : </span>
                                        <span className='text-white'> {secondElement[el]} </span>

                                    </p>

                                    )}
                                </div>
                            </div>
                        

                </div> 
                    
                        </div> 
                    ):<EmptyPageCompare/>}   
                    
                </div> 
            
            </section>
            <section className='mt-10'>
                {firstElement && secondElement && (
                    <>
                        <div className='bg-[#1F2937] p-2 text-white w-[800px] m-auto rounded-md'>
                         <p>{firstElement.title} is {firstElement.description} developed by {firstElement.developer} and released in {firstElement.releaseYear}. On the other hand, {secondElement.title} is {secondElement.description} developed by {secondElement.developer} and released in {secondElement.releaseYear}.</p>
                    </div>
                       

                        <div className='w-fit  m-auto mt-10 bg-[#1F2937] p-3  rounded-md'>
                            <table className='w-92 h-52 text-center border m-auto '>
                                <thead className='border'>
                                    <tr className='text-[#60A5FA]'>
                                        <th >Game : </th>
                                        <th className='w-32 p-2'>{firstElement.title}</th>
                                        <th className='w-32'>{secondElement.title}</th>
                                    </tr> 
                                </thead>
                                <tbody >
                                    <tr>
                                        <td className='text-[#60A5FA]'>
                                            <strong>Rating</strong>
                                        </td>
                                        <td style={{
                                            backgroundColor: firstElement.rating < secondElement.rating ? 'red' : 'green'
                                        }} className='text-white' >{firstElement.rating}
                                        </td>
                                        <td className='text-white' style={{
                                            backgroundColor: secondElement.rating < firstElement.rating ? 'red' : 'green'
                                        }}>{secondElement.rating}</td>
                                    </tr>
                                    <tr className='border'>
                                        <td className='text-[#60A5FA]'>
                                            <strong>Price</strong></td>
                                        <td className='text-white' style={{ backgroundColor: firstElement.price > secondElement.price ? "red" : "green" }}>{firstElement.price}</td>
                                        <td className='text-white' style={{ backgroundColor: secondElement.price > firstElement.price ? "red" : "green" }}>{secondElement.price}</td>
                                    </tr>
                                    <tr className='border'>
                                        <td className='text-[#60A5FA]'>
                                            <strong>ReleaseYear</strong></td>
                                        <td className='text-white' style={{
                                            backgroundColor: firstElement.releaseYear < secondElement.releaseYear ? 'red' : 'green'
                                        }} >{firstElement.releaseYear}</td>
                                        <td className='text-white' style={{
                                            backgroundColor: secondElement.releaseYear < firstElement.releaseYear ? 'red' : 'green'
                                        }} >{secondElement.releaseYear}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )}



            </section>
        </section>
    )
}

export default ComparatorPage
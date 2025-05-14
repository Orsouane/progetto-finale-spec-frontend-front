import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

function ComparatorPage() {
    const { records, compare, compare2 } = useContext(GlobalContext);

    const firstElement = records.find(el => el.title === compare);
    const secondElement = records.find(el => el.title === compare2);

    return (
        <section className='w-full m-auto '>
            <section className='flex justify-center gap-100  w-[1600px] m-auto mt-20'>
                
                <div className='bg-[#1F2937] w-92 p-2 rounded-md'>
                   {firstElement && (
                        <>  
                            <img src={firstElement.image} />
                            <div className='grid grid-cols-2 pb-2 pt-2'>
                               
                                 <p className='text-white text-sm'> <span className='text-sm  text-[#60A5FA]'>Title : </span>{firstElement.title}</p>
                               
                                 <p className='text-white text-sm'><span className='text-sm  text-[#60A5FA]'> Rating :</span>  {firstElement.rating}</p>
                                
                                 <p className='text-white text-sm'>  <span className='text-sm  text-[#60A5FA]'> ReleaseYear :</span>  {firstElement.releaseYear}</p>

                                 <p className='text-white text-sm'>   <span className='text-sm  text-[#60A5FA]'> price : </span>   {firstElement.price}</p>
                            </div>
                        </>
                    )
                    }
                </div>
                <div className='bg-[#1F2937] w-92 p-2 rounded-md'>
                    {secondElement && (
                        <>
                            <img src={secondElement.image} />
                            <div className='grid grid-cols-2 pb-2 pt-2'>
                                <p className='text-white text-sm'> <span className='text-sm  text-[#60A5FA]'>Title : </span>{secondElement.title}</p>

                                <p className='text-white text-sm'><span className='text-sm  text-[#60A5FA]'> Rating :</span>  {secondElement.rating}</p>

                                <p className='text-white text-sm'>  <span className='text-sm  text-[#60A5FA]'> ReleaseYear :</span>  {secondElement.releaseYear}</p>

                                <p className='text-white text-sm'>   <span className='text-sm  text-[#60A5FA]'> price : </span>   {secondElement.price}</p>
                            </div>

                           
                        </>
                    )
                    }
                </div>
            </section>
            <section className='mt-2'>
                {firstElement && secondElement && (
                    <>
                        <div className='bg-[#1F2937] p-2 text-white w-[800px] m-auto rounded-md'>
                         <p>{firstElement.title} is {firstElement.description} developed by {firstElement.developer} and released in {firstElement.releaseYear}. On the other hand, {secondElement.title} is {secondElement.description} developed by {secondElement.developer} and released in {secondElement.releaseYear}.</p>
                    </div>
                       

                        <div className='w-fit  m-auto mt-10 bg-[#1F2937] p-3  rounded-md'>
                            <table className='w-92 h-60 text-center border m-auto'>
                                <thead className='border'>
                                    <tr className='text-[#60A5FA]'>
                                        <th >Game : </th>
                                        <th>{firstElement.title}</th>
                                        <th>{secondElement.title}</th>
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
                                        <td className='text-white' style={{ backgroundColor: secondElement.price > firstElement.price ? "red" : "green" }}>{secondElement.price}$</td>
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
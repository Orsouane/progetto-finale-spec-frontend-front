import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

function ComparatorPage() {
    const { records, compare, compare2 } = useContext(GlobalContext);
    const chiave = ["title", "category", "developer", "rating", "releaseYear", "price", "description"]
    //* Prende l'elemento che ha il nome uguale a compare1/compare2
    const firstElement = records.find(el => el.title === compare);
    const secondElement = records.find(el => el.title === compare2);

    return (
        <section>
            {firstElement && secondElement ? 
             (  <>      
                <section className='flex'>
                <div>     
                          <div>
                                <img src={firstElement.image} /> 
                               {chiave.map((el, index) => 
                            <div key={index}> 
                            {`${el}:${firstElement[el]}`}  </div>)}
                          </div>
                         
                
                            <div>
                                <img src={secondElement.image} />  {chiave.map((el, index) => <p key={index}> {`${el}:${secondElement[el]}`}  </p>)}
                            </div>
                          
                      
                   
                </div>
            </section>
            <section className='mt-2'>
             
                 
                     <p>{firstElement.title} is {firstElement.description} developed by {firstElement.developer} and released in {firstElement.releaseYear}. On the other hand, {secondElement.title} is {secondElement.description} developed by {secondElement.developer} and released in {secondElement.releaseYear}.</p>

                <div className='w-fit m-auto mt-10'>
                    <table className='w-70 text-center border'>
                        <thead className='border'>
                            <tr>
                                <th>Game : </th>
                                <th>{firstElement.title}</th>
                                <th>{secondElement.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Rating</strong>
                                </td>
                                <td style={{
                                    backgroundColor: firstElement.rating < secondElement.rating ? 'lightcoral' : 'lightgreen'
                                }} >{firstElement.rating}/10
                                </td>
                                <td style={{
                                    backgroundColor: secondElement.rating < firstElement.rating ? 'lightcoral' : 'lightgreen'
                                }}>{secondElement.rating}/10</td>
                            </tr>
                            <tr className='border'>
                                <td>
                                    <strong>Price</strong></td>
                                <td style={{ backgroundColor: firstElement.price > secondElement.price ? "lightcoral" : "lightgreen" }}>{firstElement.price}$</td>
                                <td style={{ backgroundColor: secondElement.price > firstElement.price ? "lightcoral" : "lightgreen" }}>{secondElement.price}$</td>
                            </tr>
                            <tr className='border'>
                                <td>
                                    <strong>ReleaseYear</strong></td>
                                <td style={{
                                    backgroundColor: firstElement.releaseYear < secondElement.releaseYear ? 'lightcoral' : 'lightgreen'
                                }} >{firstElement.releaseYear}</td>
                                <td style={{
                                    backgroundColor: secondElement.releaseYear < firstElement.releaseYear ? 'lightcoral' : 'lightgreen'
                                }} >{secondElement.releaseYear}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                  
              

                
               
            </section>  
                </>) : "No item selected in the comparator"}
        </section>
    )
}

export default ComparatorPage
    // < p > title: { firstElement.title }</p >
    //                         <p>category : {firstElement.category}</p>
    //                         <p>developer :{firstElement.developer}</p>
    //                         <img src={firstElement.image} />
    //                         <p> rating : {firstElement.rating}</p>
    //                         <p> releaseYear : {firstElement.releaseYear}</p>
    //                         <p> price :{firstElement.price}$</p>
    //                         <p> description :{firstElement.description}</p>  
import React, { useState, useEffect } from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import { CgGames } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";
function PremiumGamingLoader() {
     const [progress, setProgress] = useState(0);
     const [currentPhase, setCurrentPhase] = useState(0);

     const phases = [
          "Initializing...",
          "Loading Games...",
          "Finalizing..."
     ];

     useEffect(() => {
          const progressInterval = setInterval(() => {
               setProgress(prev => {
                    const newProgress = prev + Math.random() * 2.5 + 0.8;

                    // Cambia fase in base al progresso
                    if (newProgress > 25 && currentPhase < 1) setCurrentPhase(1);
                    else if (newProgress > 60 && currentPhase < 2) setCurrentPhase(2);
                    else if (newProgress > 85 && currentPhase < 3) setCurrentPhase(3);

                    if (newProgress >= 100) {
                         return 0; // Reset per demo
                    }
                    return newProgress;
               });
          }, 120);

          return () => clearInterval(progressInterval);
     }, [currentPhase]);

     return (<>  
   
     <section className='h-full'>
               <div className='p-4 sticky top-0 z-50 bg-[#0F1923] h-18 text-xs sm:text-base'>
                    <div className='flex justify-between items-center p-3 max-w-[1000px] m-auto bg-[#1F2937] rounded-md h-full shadow-2xl'>
                         < div className='text-[#60A5FA] flex items-center gap-1 c
cursor-not-allowed pointer-events-none'>
                              <p className=' rounded-[50%] p-0.5 sm:p-1 font-bold text-[#0F1923] bg-[#60A5FA] border-2 border-[#0F1923] '>  BS   </p>
                              BoolStation store
                         </div>
                         <div className='flex gap-x-1 items-center '>
                              <p className='cursor-not-allowed pointer-events-none   text-white p-1 rounded-md text-sm font-light flex items-center  hover:bg-[#8E95A2]/30'> <CgGames className='mr-0.5' />  <span className='text-xs sm:text-base '>All Games </span>  </p>
                              <p className="cursor-not-allowed pointer-events-none   bg-[#1F2937] text-white p-1 rounded-md text-sm  font-light flex items-center hover:bg-[#8E95A2]/30 " >
                                   <IoMdHeart className='pr-0.5' /> <span className='text-xs sm:text-base '>Favourites</span>
                              </p>
                         </div>
                    </div>
               </div>
      
     </section>
     
     
          <div className=" inset-0 bg-[#0F1923] flex items-center justify-center overflow-hidden">
               {/* Background matrix effect */}
               <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                         <div
                              key={i}
                              className="absolute opacity-10"
                              style={{
                                   left: `${Math.random() * 100}%`,
                                   top: `${Math.random() * 100}%`,
                                   fontSize: `${12 + Math.random() * 8}px`,
                                   color: '#00ff88',
                                   animation: `fall ${3 + Math.random() * 4}s linear infinite`,
                                   animationDelay: `${Math.random() * 2}s`
                              }}
                         >
                              {Math.random() > 0.5 ? '1' : '0'}
                         </div>
                    ))}
               </div>

               <div className="text-center max-w-lg mx-auto px-8 relative z-10 mt-3" >

                    {/* Logo principale - Ispirato a controller Xbox/PS */}
                    <div className="mb-16">
                         <div className="relative w-32 h-32 mx-auto mb-8">
                              {/* Hexagon esterno rotante */}
                              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                                   <svg className="w-full h-full text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
                                        <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" className="opacity-30" />
                                   </svg>
                              </div>

                              {/* Anello medio */}
                              <div className="absolute inset-4 rounded-full border-2 border-blue-500/40 animate-pulse"></div>

                              {/* Centro con icona gaming */}
                              <div className="absolute inset-8 rounded-full  bg-[#60A5FA] border-2 border-[#0F1923] flex items-center justify-center shadow-2xl shadow-blue-500/30">
                                   {/* Controller symbol */}
                                  <p className='font-semibold text-xl'> BS </p>
                              </div>

                              {/* Orbiting elements - stile Destiny */}
                              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
                                   <div className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" style={{ top: '-6px', left: '50%', transform: 'translateX(-50%)' }}></div>
                                   <div className="absolute w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" style={{ bottom: '-4px', right: '20%' }}></div>
                                   <div className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" style={{ top: '30%', left: '-4px' }}></div>
                              </div>
                         </div>

                         <h1 className="text-4xl  mb-3 flex flex-col items-center ">
                              <span className="text-[#60A5FA]  ">
                                   BoolStation
                              </span>
                              <span className=' text-[#60A5FA]'  > Store</span>
                         </h1>

                    </div>

                    {/* Stato caricamento */}
                    <div className="mb-12">
                         <p className="text-white text-xl mb-6 font-medium tracking-wide">
                              {phases[currentPhase]}
                         </p>

                         {/* Barra di progresso futuristica */}
                         <div className="relative mb-6">
                              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                   <div
                                        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out relative"
                                        style={{ width: `${Math.min(progress, 100)}%` }}
                                   >
                                        {/* Effetto scanning */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"
                                             style={{ animation: 'scanning 2s ease-in-out infinite' }}></div>
                                   </div>
                              </div>

                              {/* Percentuale con stile futuristico */}
                              <div className="flex justify-between items-center mt-4">
                                   <span className="text-slate-400 text-sm font-mono tracking-wider">PROGRESS</span>
                                   <span className="text-cyan-400 text-lg font-mono font-bold tracking-wider">
                                        {Math.round(Math.min(progress, 100))}%
                                   </span>
                              </div>
                         </div>
                    </div>

                    {/* Loading animation - stile cyberpunk */}
                    <div className="flex justify-center space-x-3 mb-12">
                         {[...Array(4)].map((_, i) => (
                              <div
                                   key={i}
                                   className="w-3 h-3 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full animate-bounce shadow-lg shadow-blue-400/50"
                                   style={{
                                        animationDelay: `${i * 0.15}s`,
                                        animationDuration: '0.8s'
                                   }}
                              ></div>
                         ))}
                    </div>

                    {/* Status message */}
                    <div className="text-slate-400 text-sm font-mono tracking-wider">
                         <p className="animate-pulse">Store access in progress...</p>
                    </div>
               </div>

               {/* Glitch effects */}
               <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Scanning lines */}
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"
                         style={{ top: '30%', animation: 'scan 3s ease-in-out infinite' }}></div>
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"
                         style={{ top: '70%', animation: 'scan 3s ease-in-out infinite', animationDelay: '1.5s' }}></div>
               </div>

               <style>{`
        @keyframes fall {
          to { transform: translateY(100vh) rotate(360deg); }
        }
        @keyframes scanning {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        @keyframes scan {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(0%); }
        }
      `}</style>
          </div>
     </>
        
     );
}

export default PremiumGamingLoader;
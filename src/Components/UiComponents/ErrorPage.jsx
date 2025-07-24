import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
     const [glitchEffect, setGlitchEffect] = useState(false);
     const [scanlinePosition, setScanlinePosition] = useState(0);
const navigate = useNavigate()
     useEffect(() => {
          // Glitch effect every 3 seconds
          const glitchInterval = setInterval(() => {
               setGlitchEffect(true);
               setTimeout(() => setGlitchEffect(false), 200);
          }, 3000);

          // Scanline animation
          const scanlineInterval = setInterval(() => {
               setScanlinePosition(prev => (prev + 1) % 100);
          }, 50);

          return () => {
               clearInterval(glitchInterval);
               clearInterval(scanlineInterval);
          };
     }, []);

     const navigare = ()=>{
          navigate("/")
     }

     return (
          <div className="min-h-screen bg-[#0F1923] relative overflow-hidden flex items-center justify-center">
               {/* Background Blue Glow */}
               <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-700 rounded-full opacity-25 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
               </div>

               {/* Scanline Effect */}
               <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                         background: `linear-gradient(180deg, transparent ${scanlinePosition}%, rgba(0,112,243,0.1) ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`
                    }}
               ></div>

               {/* Main Content */}
               <div className={`relative z-10 text-center px-6 transition-all duration-200 ${glitchEffect ? 'transform translate-x-1 text-red-500' : ''}`}>

                    {/* Gaming Controller Icon */}
                    <div className="mb-8 relative">
                         <div className="text-8xl mb-4 text-blue-400 drop-shadow-2xl transform hover:scale-110 transition-transform duration-300">
                              {/*  Controller SVG-like representation */}
                              <div className="relative inline-block">
                                   <div className="text-blue-400 filter drop-shadow-lg" style={{
                                        textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)',
                                        fontSize: '5rem'
                                   }}>
                                        🎮
                                   </div>
                                   {/* Glowing particles around controller */}
                                   <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-ping"></div>
                                   <div className="absolute -top-1 -right-3 w-1 h-1 bg-blue-200 rounded-full opacity-80 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                   <div className="absolute -bottom-2 left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-ping" style={{ animationDelay: '1s' }}></div>
                              </div>
                         </div>
                    </div>

                    {/* Error Title */}
                    <h1 className={`text-3xl md:text-8xl font-bold mb-4 transition-all duration-200 ${glitchEffect ? 'text-red-400' : 'text-blue-400'}`}
                         style={{
                              textShadow: glitchEffect
                                   ? '0 0 30px rgba(248, 113, 113, 0.8), 0 0 60px rgba(248, 113, 113, 0.4)'
                                   : '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)',
                              fontFamily: 'Arial, sans-serif',
                              letterSpacing: '0.1em'
                         }}>
                         ERROR 404
                    </h1>

                    {/* Subtitle */}
                    <div className="mb-8">
                         <p className="text-xl md:text-2xl text-white mb-2 opacity-90">
                              The page you're searching for is not found.
                         </p>
                      
                    </div>

                    {/* Connection Status */}
                    <div className="mb-8 flex items-center justify-center space-x-3">
                         <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  
                         <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
                    
                         <button onClick={navigare} className="group relative px-4 py-3 bg-transparent text-blue-400 font-bold text-md rounded-full border-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 block m-auto md:w-auto cursor-pointer "
                              style={{
                                   boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
                              }}>
                              <span className="relative z-10">Back to Games List</span>
                         </button>
                    </div>

                  

                    {/* -style footer */}
                    <div className="mt-10 text-center">
                         <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
                              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                              <span> Network Status:  </span>
                              <span className="text-red-400">404</span>
                              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                         </div>
                    </div>
               </div>

               {/* Additional Visual Effects */}
               {glitchEffect && (
                    <div className="absolute inset-0 pointer-events-none">
                         <div className="absolute inset-0 bg-red-500 opacity-5"></div>
                         <div className="absolute inset-0" style={{
                              background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)'
                         }}></div>
                    </div>
               )}

               {/* Floating particles */}
               <div className="absolute top-20 left-10 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-bounce"></div>
               <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }}></div>
               <div className="absolute bottom-32 left-20 w-1 h-1 bg-blue-200 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '2s' }}></div>
               <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-500 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
     );
};

export default ErrorPage;
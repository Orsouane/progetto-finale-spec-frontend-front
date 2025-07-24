import React, { useState, useEffect } from 'react';
import Jumbotron from './Jumbotron/Jumbotron';
import { NavLink } from 'react-router-dom'
import { CgGames } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";
const ServerError = () => {
     const [glitchText, setGlitchText] = useState('SYSTEM CRASH');
     const [pixelParticles, setPixelParticles] = useState([]);
     const [scanlinePosition, setScanlinePosition] = useState(0);
     const [systemRebooting, setSystemRebooting] = useState(false);

     const glitchVariations = ['SYSTEM CRASH', 'SY5T3M CR4SH', 'S¥$T€M CRASH', 'SYST3M CR@SH'];

     useEffect(() => {
          // Text glitch effect
          const glitchInterval = setInterval(() => {
               const randomText = glitchVariations[Math.floor(Math.random() * glitchVariations.length)];
               setGlitchText(randomText);
               setTimeout(() => setGlitchText('SYSTEM CRASH'), 150);
          }, 1800);

          // Generate pixel particles (more chaotic for system crash)
          const particles = Array.from({ length: 16 }, (_, i) => ({
               id: i,
               x: Math.random() * 100,
               y: Math.random() * 100,
               size: Math.random() * 10 + 3,
               color: ['#6366f1', '#8b5cf6', '#60a5fa', '#a855f7', '#3b82f6'][Math.floor(Math.random() * 5)],
               speed: Math.random() * 3 + 1,
               direction: Math.random() * 360
          }));
          setPixelParticles(particles);

          // Animate particles (faster for crash effect)
          const particleInterval = setInterval(() => {
               setPixelParticles(prev => prev.map(particle => ({
                    ...particle,
                    x: (particle.x + particle.speed * Math.cos(particle.direction * Math.PI / 180) + 100) % 100,
                    y: (particle.y + particle.speed * Math.sin(particle.direction * Math.PI / 180) + 100) % 100
               })));
          }, 80);

          // Scanline effect (faster for error state)
          const scanlineInterval = setInterval(() => {
               setScanlinePosition(prev => (prev + 3) % 100);
          }, 40);

          return () => {
               clearInterval(glitchInterval);
               clearInterval(particleInterval);
               clearInterval(scanlineInterval);
          };
     }, []);

     const handleSystemReboot = () => {
          setSystemRebooting(true);
     window.location.reload()
          setTimeout(() => setSystemRebooting(false), 3000);
     };

     return (
          <>
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
                                   <IoMdHeart className='pr-0.5' /> <span className='text-xs sm:text-base '>Favorite</span>
                              </p>
                         </div>
                    </div>
               </div>
                <Jumbotron/>
               <div className="min-h-screen relative overflow-hidden py-6" style={{
                    background: "#0F1923",
                    backgroundSize: 'cover, 25px 25px, 25px 25px'
               }}>

                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 opacity-20">

                         <div className="absolute inset-0" style={{
                              background: `
            linear-gradient(90deg, transparent 49%, rgba(99, 102, 241, 0.6) 49%, rgba(99, 102, 241, 0.6) 51%, transparent 51%),
            linear-gradient(0deg, transparent 49%, rgba(139, 92, 246, 0.6) 49%, rgba(139, 92, 246, 0.6) 51%, transparent 51%)
          `,
                              backgroundSize: '50px 50px',
                              animation: 'gridPulse 3s ease-in-out infinite'
                         }}></div>
                    </div>

                    {/* Scanline Effect */}
                    <div
                         className="absolute inset-0 pointer-events-none opacity-15"
                         style={{
                              background: `linear-gradient(180deg, transparent ${scanlinePosition}%, #60a5fa ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`
                         }}
                    ></div>

                    {/* Pixel Particles */}
                    {pixelParticles.map((particle) => (
                         <div
                              key={particle.id}
                              className="absolute transition-none"
                              style={{
                                   left: `${particle.x}%`,
                                   top: `${particle.y}%`,
                                   width: `${particle.size}px`,
                                   height: `${particle.size}px`,
                                   backgroundColor: particle.color,
                                   boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
                                   filter: 'blur(0px)',
                                   imageRendering: 'pixelated'
                              }}
                         ></div>
                    ))}

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

                         {/* Error Icon */}
                         <div className="mb-8 relative">
                              <div className="text-7xl mb-6 relative" style={{
                                   color: '#6366f1',
                                   textShadow: '0 0 20px #6366f1, 0 0 40px #6366f1, 0 0 80px #6366f1',
                                   animation: 'errorShake 1s ease-in-out infinite',
                                   filter: 'drop-shadow(0 0 15px #6366f1)'
                              }}>
                                   ⚠️
                              </div>
         {/* Pixel dust around error icon */}
                              <div className="absolute -top-4 -left-2 w-2 h-2 bg-indigo-400" style={{
                                   boxShadow: '0 0 10px #6366f1',
                                   animation: 'pixelCrash 1.2s ease-in-out infinite'
                              }}>

                              </div>
                              <div className="absolute -top-2 -right-3 w-3 h-3 bg-purple-400" style={{
                                   boxShadow: '0 0 10px #8b5cf6',
                                   animation: 'pixelCrash 1.5s ease-in-out infinite reverse'
                              }}>

                              </div>
                              <div className="absolute -bottom-3 left-2 w-2 h-2 bg-blue-400" style={{
                                   boxShadow: '0 0 10px #60a5fa',
                                   animation: 'pixelCrash 1.8s ease-in-out infinite'
                              }}>
                                   
                              </div>
                         </div>

                         {/* System Crash Text */}
                         <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center" style={{
                              fontFamily: 'Courier New, monospace',
                              color: '#6366f1',
                              textShadow: '0 0 20px #6366f1, 0 0 40px #6366f1',
                              letterSpacing: '0.2em',
                              textTransform: 'uppercase',
                              animation: 'errorPulse 1.5s ease-in-out infinite'
                         }}>
                              {glitchText}
                         </h1>

                         {/* 500 Subtitle */}
                         <div className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{
                              fontFamily: 'Courier New, monospace',
                              color: '#8b5cf6',
                              textShadow: '0 0 15px #8b5cf6, 0 0 30px #8b5cf6',
                              letterSpacing: '0.15em'
                         }}>
                             SERVER ERROR
                         </div>

                         {/* Error Code Display */}
                         <div className="mb-8 flex items-center  text-center  flex-col gap-1 ">
                            
                             

                              <div className="text-purple-400 text-4xl">⚡</div>

                              <div>
                                   <div className="text-blue-300 text-lg font-bold" style={{
                                        fontFamily: 'Courier New, monospace',
                                        textShadow: '0 0 10px #93c5fd'
                                   }}>
                                        STATUS
                                   </div>
                                   <div className="text-red-400 text-2xl font-bold" style={{
                                        fontFamily: 'Courier New, monospace',
                                        textShadow: '0 0 10px #f87171'
                                   }}>
                                        OFFLINE
                                   </div>
                              </div>
                         </div>

                         {/* System Reboot Button */}
                         <button
                              onClick={handleSystemReboot}
                              className={`group relative px-8 py-4 text-xl font-bold transition-all duration-200 ${systemRebooting ? 'bg-emerald-400 text-black' : 'bg-transparent text-indigo-400'
                                   }`}
                              style={{
                                   fontFamily: 'Courier New, monospace',
                                   border: systemRebooting ? '3px solid #10b981' : '3px solid #6366f1',
                                   textShadow: systemRebooting ? 'none' : '0 0 15px #6366f1',
                                   boxShadow: systemRebooting
                                        ? '0 0 30px #10b981, inset 0 0 30px rgba(16, 185, 129, 0.3)'
                                        : '0 0 20px #6366f1, inset 0 0 20px rgba(99, 102, 241, 0.1)',
                                   animation: systemRebooting ? 'systemReboot 1s ease-out' : 'buttonFlicker 2s ease-in-out infinite'
                              }}
                         >
                              {systemRebooting ? '🔄 REBOOTING SYSTEM...' : 'RESTART SERVER'}

                              {!systemRebooting && (
                                   <div className="absolute inset-0 border-3 border-purple-400 opacity-0 group-hover:opacity-60 transition-opacity duration-200" style={{
                                        boxShadow: '0 0 15px #8b5cf6'
                                   }}></div>
                              )}
                         </button>          
                    </div>

                    {/* CSS Animations */}
                    <style>{`
        @keyframes errorShake {
          0%, 100% { transform: translateX(0px) scale(1); }
          25% { transform: translateX(-5px) scale(1.02); }
          75% { transform: translateX(5px) scale(0.98); }
        }
        
        @keyframes errorGlitch {
          0%, 90% { opacity: 0; }
          91%, 100% { opacity: 0.9; }
        }
        
        @keyframes errorPulse {
          0%, 100% { 
            color: #6366f1; 
            text-shadow: 0 0 20px #6366f1, 0 0 40px #6366f1;
          }
          50% { 
            color: #8b5cf6; 
            text-shadow: 0 0 25px #8b5cf6, 0 0 50px #8b5cf6;
          }
        }
        
        @keyframes buttonFlicker {
          0%, 100% { 
            border-color: #6366f1; 
            box-shadow: 0 0 20px #6366f1, inset 0 0 20px rgba(99, 102, 241, 0.1);
          }
          50% { 
            border-color: #8b5cf6; 
            box-shadow: 0 0 25px #8b5cf6, inset 0 0 25px rgba(139, 92, 246, 0.1);
          }
        }
        
        @keyframes pixelCrash {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-12px) rotate(180deg); opacity: 0.5; }
        }
        
        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.05; }
        }
        
        @keyframes systemReboot {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(0.9); }
          75% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
               </div>
          </>
          
     );
};

export default ServerError;
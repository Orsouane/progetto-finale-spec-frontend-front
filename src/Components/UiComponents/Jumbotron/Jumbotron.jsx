import React from 'react';
import { Gamepad, Circle, Triangle, Square, X } from 'lucide-react';
import SplitText from './JumbotronTextAnimation';

 function Jumbotron() {
      const offset = window.innerWidth < 600 ? 660 : window.innerWidth < 1024 ? 880 : 790 ;
     return (
          <div className="relative w-full h-[650px] sm:h-[1100px] lg:h-[900px] overflow-hidden rounded-lg shadow-xl  ">
               {/* Background gaming elements */}
               <div className="absolute inset-0 overflow-hidden">
                    {/* Joysticks represented by Gamepad icons */}
                    <div className="absolute top-10 left-10 text-purple-300 opacity-30">
                         <Gamepad size={100} className='animate-pulse ' />
                    </div>
                    <div className="absolute bottom-55  sm:bottom-20 right-3 sm:right-20 text-purple-300 opacity-20 transform rotate-45">
                         <Gamepad className=' size-15 sm:size-20 animate-pulse' />
                    </div>

                    {/* X Button */}
                    <div className="absolute top-25 sm:top-40  right-20 sm:right-40 text-blue-300 opacity-30">
                         <X size={50} strokeWidth={3} />
                    </div>

                    {/* Triangle Button */}
                    <div className="absolute bottom-40 sm:left-40 text-green-300 opacity-30">
                         <Triangle size={50} strokeWidth={3} fill="rgba(52, 211, 153, 0.2)" className='animate-pulse'/>
                    </div>

                    {/* Circle Button */}
                    <div className="absolute sm:top-20 right-1/4 text-red-300 opacity-30">
                         <Circle size={40} strokeWidth={3} className='animate-pulse'/>
                    </div>

                    {/* Square Button */}
                    <div className="absolute bottom-23  sm:bottom-20 left-1/4 text-pink-300 opacity-30">
                         <Square size={40} strokeWidth={3} />
                    </div>

                    {/* More controller elements scattered around */}
                    <div className="absolute top-3/4 right-1/3 text-indigo-300 opacity-20">
                         <Gamepad size={60} />
                    </div>
                    <div className="absolute top-1/4 left-1/3 text-violet-300 opacity-20">
                         <X size={30} strokeWidth={3}  />
                    </div>
               </div>

               {/* Content container */}
               <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
                         BoolStation store
                    </h1>
                    <div className="text-xl text-purple-100 max-w-2xl mb-8">
                       
                         <SplitText/>
                    </div>
                    <div className="flex gap-4">
                         <button className="px-3 py-2 bg-[#60A5FA] 
                         hover:bg-[rgb(129,110,216)] 
                         text-white font-semibold rounded-lg shadow-md transition duration-500 animate-pulse cursor-pointer " onClick={() => window.scrollBy({ top: offset, behavior: 'smooth' })}>
                              Start exploring

                         </button>
                    </div>
               </div>
          </div>
     );
}

export default Jumbotron
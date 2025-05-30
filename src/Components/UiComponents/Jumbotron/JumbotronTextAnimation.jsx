"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function SplitText() {
     const containerRef = useRef(null)

     useEffect(() => {
          document.fonts.ready.then(() => {
               if (!containerRef.current) return

               containerRef.current.style.visibility = "visible"

               const h1 = containerRef.current.querySelector("h1")
               const { words } = splitText(h1, { preserveWhitespace: true })

               animate(
                    words,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                         type: "spring",
                         duration: 2,
                         bounce: 0,
                         delay: stagger(0.05),
                    }
               )
          })
     }, [])

     return (
          <div className="container" ref={containerRef} style={{ visibility: "hidden" }}>
               <h1 className="h1 text-center">
                    Discover, compare, and save your favorite games,all in one cozy place, with ease & style.

               </h1>
               <Stylesheet />
          </div>
     )
}

function Stylesheet() {
     return (
          <style>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 420px;
        text-align: left;
      }
      .split-word {
        will-change: transform, opacity;
      }
    `}</style>
     )
}

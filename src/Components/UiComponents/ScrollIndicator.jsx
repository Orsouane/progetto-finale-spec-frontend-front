"use client";
import { useScroll, motion } from "framer-motion";

 function ScrollIndicator() {
     const { scrollYProgress } = useScroll();

     return (
          <motion.div
               style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 8,
                    originX: 0,
                    backgroundColor: "#8E95A2",
                    zIndex: 9999,
               }}
          />
     );
}

export default ScrollIndicator

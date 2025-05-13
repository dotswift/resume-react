import React, { useState, useEffect } from "react"
import PixelTrail from "./pixel-trail"

// Simple screen size hook
const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return {
    width,
    lessThan: (breakpoint: string) => {
      const breakpoints: Record<string, number> = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      };
      return width < (breakpoints[breakpoint] || 0);
    }
  };
};

const PixelTrailDemo: React.FC = () => {
  const screenSize = useScreenSize()

  return (
    <div className="w-dvw h-dvh bg-black text-white flex flex-col font-azeret-mono">
      <div className="absolute inset-0 z-0">
        <PixelTrail
          pixelSize={screenSize.lessThan(`md`) ? 16 : 24}
          fadeDuration={500}
          pixelClassName="bg-white"
        />
      </div>

      <div className="justify-center items-center flex flex-col w-full h-full">
        <h2 className="font-tiny5 text-3xl sm:text-4xl md:text-6xl uppercase">
          FANCYCOMPONENTS.DEV
        </h2>
        <p className="pt-0.5 sm:pt-2 text-xs sm:text-base md:text-xl">
          Make the web fun again.
        </p>
      </div>
    </div>
  )
}

export default PixelTrailDemo
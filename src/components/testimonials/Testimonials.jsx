import React,{ useState ,useEffect } from 'react'
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return ( 
   <>
    {isMobile ? <MobileView/> : <DesktopView/>}
   </>
  )
}

export default Testimonials

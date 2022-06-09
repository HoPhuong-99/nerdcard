import Narbar from './components/Narbar/Narbar';
import { Slogan } from './components/Slogan/Slogan';
import './App.css';
import Content from './components/Content/Content';
import { useEffect, useState } from 'react';
import useDarkMode from './useDarkMode';
import Contact from './components/Contact/Contact';
import { BtnContact } from './components/ButtonContact/BtnContact';

function App() {
  const [windowSite, setWindowSite] = useState({
    width : undefined,
    height: undefined
  })
  const [isMobile, setIsMobile] = useState(false)

  // check fisrt time
  useEffect(()=>{

      const handleSize = () => {
        setWindowSite( {
          width : window.innerWidth,
          height : window.innerHeight
        })
      }
      window.addEventListener("resize",handleSize);
      handleSize();
      return () => window.removeEventListener("resize",handleSize);
  },[])

  useEffect(()=> {
    if(windowSite.width < 500)
    {
      setIsMobile(true)
    }
    else{
      setIsMobile(false)
    }
  }, [windowSite])

  return (
    <div className=" overflow-y-auto overflow-x-hidden relative font-sora h-screen px-4 pt-4 
    bg-gradient-to-b dark:from-gray-900 dark:to-gray-600  
    from-red-500 to-red-300 dark:text-white text-black
    md:px-20" >
      <Narbar isMobile={isMobile}  />
      <BtnContact />
      <Slogan/>
      <Content/>
      <Contact/>
    </div>

  );
}

export default App;


import { useEffect, useState } from 'react';
import './App.css';

import Body1 from './components/Body1';
import Body2 from './components/Body2';



function App() {
  const [visitor, setVisitor] = useState(0);

  useEffect(() => {
    const randomizeVisitor = Math.random();
    if (randomizeVisitor > 0.5) {
      setVisitor(1);
    }

    }, []);



  const handleClick = () => {
    console.log ({
      event: "ctaClicked" ,
      cta : "click" ,
      variant : visitor === 0 ? "control" : "variantB",
    });
    window.location.pathname = "?variant=variantB";

  }






  return (
    <div>
       {visitor === 0 ? (
        <>
        <Body1 />
        <div className='button-container'>
        <button className="button" onClick={handleClick}>Try More Recipes</button>

        </div>
        
  
        </>
        
      ) : (
        <>
        <Body2 />
        <div className='button-container'>
        <button className="button" onClick={handleClick}>Try More Recipes</button>

        </div>
       

        </>
        
      )}
      

    </div>
    
     
    
  );
}

export default App;

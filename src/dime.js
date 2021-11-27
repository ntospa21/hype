import React, {useState, useEffect} from "react";
import App from "./App";

const Dime = () =>{

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 700;
    useEffect(() => {
     const handleResizeWindow = () => setWidth(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
    if (width > breakpoint) {
      return (
        <div>
          <App/>
        </div>
      );
    }
    return (
      <div>
        <App/>
      </div>
    );
  }
  export default Dime;
  

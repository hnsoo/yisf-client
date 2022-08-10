import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Ready from "./pages/Ready";
import UtilService from "./service/util";

function App() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        UtilService.getTime()
            .then((data) => {
                console.log('get time')
                let now = new Date();
                // let openTime = data.openTime;
                let openTime = new Date("2022-08-09 01:00:00")
                let endTime = new Date(data.endTime);
                if (!(now > openTime && now < endTime)) {
                    setIsReady(true)
                }
                else{
                    setIsReady(false)
                }
            })
    }, [])

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ isReady ? <Ready /> : <Main />} />
            <Route path="/login" element={ isReady ? <Ready /> : <Login />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
import React from 'react';
import {Route, Routes} from "react-router";
import Home from "./component/home/Home";

const App = () => {
    return (
        <>
          <Routes>
              <Route path={"/"} element={<Home/>}/>

          </Routes>
        </>
    );
};

export default App;
import React from 'react';
import {Route, Routes} from "react-router";
import Home from "./component/home/Home";
import {Container} from "./component/home/homeStyled";
import { Toaster } from "react-hot-toast";
import Layout from "./component/layout/Layout";


const App = () => {
    return (
        <>
            <Toaster />
            <Container>
                <Layout>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>

                    </Routes>
                </Layout>
            </Container>
        </>
    );
};

export default App;
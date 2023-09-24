//import Core
// import React from 'react';

//import Third Party
import { Navigate, Route , Routes } from 'react-router-dom'

//import pages


function AllRoutes(){
    return (
        <Routes>
            {/* Home Route */}
            <Route index element={ <Navigate replace to='/home'/>}/>
            <Route path='/home' element={ <div>This Is Home</div> }/>

            {/* Test Route */}
            <Route path='/test' element={ <div>This Is Test</div> }/>

        </Routes>
    );
}

export default AllRoutes;
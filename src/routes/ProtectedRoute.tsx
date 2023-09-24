// import react
// import React from  'react';

//import Third Party
import { Outlet , Navigate } from 'react-router-dom';

interface ProtectedRouteProps{
    check : () => boolean,
    to : string
}

function ProtectedRoute ({check , to} : ProtectedRouteProps) {
    const access = check();

    return access ? <Outlet /> : <Navigate replace to={to} />;
}

export default ProtectedRoute;
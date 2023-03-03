import React from 'react';
import { useRoutes } from 'react-router-dom';
import Dash from '../dashboard/Dash';
import HomeScreen from '../home/homeScreen';
import Signin from '../register/Signin';
import SignUp from '../register/Signup';

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/signin",
            element: <Signin />
        },
        {
            path: "/dashboard",
            element: <Dash />
        },
    ])

  return element
}

export default AllRoutes
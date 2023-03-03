import React from 'react';
import { useRoutes } from 'react-router-dom';
// import Dash from '../dashboard/Dash';
import DashSaving from '../dashboard/DashSaving';
import DashHome from '../dashHome/DashHome';
import HomeScreen from '../home/homeScreen';
import Investify from '../piggyBank/Investify';
import PiggyBank from '../piggyBank/PiggyBank';
import QuickSave from '../piggyBank/QuickSave';
import Safelock from '../piggyBank/Safelock';
import Target from '../piggyBank/Target';
import Signin from '../register/Signin';
import SignUp from '../register/Signup';

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <HomeScreen />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/signin",
            element: <Signin />
        },
        {
            path: "/home",
            element: <DashHome />
        },
        {
            path: "/invest",
            element: <Investify />
        },
        {
            path: "/saving",
            children: [
                {
                    index: true,
                    element: <DashSaving />
                },
                {
                    path: "piggybank",
                    element: <PiggyBank />,
                },
                {
                    path: "safelock",
                    element: <Safelock />,
                },
                {
                    path: "target",
                    element: <Target />,
                },
            ]
        },
    ])

  return element
}

export default AllRoutes
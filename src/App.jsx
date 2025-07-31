import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {
    HomeLayout,
    Landing,
    Register,
    Login,
    DashboardLayout,
    Stats,
    Admin,
    AllJobs,
    EditJob,
    Error,
    AddJob,
    Profile
} from "./pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'dashboard',
                element: <DashboardLayout/>
            }

        ]
    },


])


function App() {

    return <RouterProvider router={router}/>;

}

export default App

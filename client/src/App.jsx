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

export const checkDefaultTheme = () => {
    const isDarkTheme =
        localStorage.getItem('darkTheme') === 'true'
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

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
                element: <Register />,
                action: () => {
                    console.log('hello there');
                    return null;
                },
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'dashboard',
                element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled}/>,
                children: [
                    {
                        index: true,
                        element: <AddJob/>
                    },
                    {
                        path: 'stats',
                        element: <Stats/>
                    },
                    {
                        path: 'all-jobs',
                        element: <AllJobs/>
                    },
                    {
                        path: 'profile',
                        element: <Profile/>
                    },
                    {
                        path: 'admin',
                        element: <Admin/>
                    }
                ]
            }

        ]
    },


])


function App() {

    return <RouterProvider router={router}/>;

}

export default App

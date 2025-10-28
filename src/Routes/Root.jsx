import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import JobDetails from "../Pages/JobDetails";
import AddJobs from "../Pages/AddJobs";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                element: <Home></Home>,
                loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path:'job/:id',
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
                element: <JobDetails></JobDetails>
            },
            {
                path:'addJobs',
                element: <AddJobs></AddJobs>
            }
        ]
    },
]);
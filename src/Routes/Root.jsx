import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import JobDetails from "../Pages/JobDetails";
import AddJobs from "../Pages/AddJobs";
import ErrorPage from "../Pages/ErrorPage";
import MyPostedJobs from "../Pages/MyPostedJobs";
import UpdateJobs from "../Pages/UpdateJobs";
import Loader from "../Components/Loader";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
                hydrateFallbackElement:<Loader></Loader>
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
                path: 'job/:id',
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute> ,
                hydrateFallbackElement:<Loader></Loader>
            },
            {
                path: 'addJobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: 'myPostedJobs',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: 'updateJobs/:id',
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
                element: <UpdateJobs></UpdateJobs>,
                hydrateFallbackElement:<Loader></Loader>
            }
        ]
    },
]);
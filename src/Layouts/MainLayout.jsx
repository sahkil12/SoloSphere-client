import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <header></header>  
            <main>
                <Outlet></Outlet>
            </main>          
        </div>
    );
};

export default MainLayout;
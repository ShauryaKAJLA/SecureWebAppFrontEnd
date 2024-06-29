import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/HomePage/Home";


const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:"/home",
                    element:<Home />
                }
            ]
        },
        {

        }
    ]
)

export default router
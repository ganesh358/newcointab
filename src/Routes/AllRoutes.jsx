import { Route, Routes } from "react-router-dom"
import Home from "./Page1"
import Page2 from "./Page2"




export default function AllRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            
            <Route path='/user' element={<Page2/>}/>

        </Routes>
    )
}
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
//media
import './styles/style.scss'
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Favorites from "./pages/Favorites/Favorites";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/product/:id'} element={<SingleProduct/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'/categories/:id'} element={<Categories/>}/>
                    <Route path={'/favorites'} element={<Favorites/>}/>
                </Route>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;

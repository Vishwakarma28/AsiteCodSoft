
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Product from './Pages/Product';
import man_banner from './Components/Navbar/Assets/Frontend_Assets/banner_mens.png'
import Woman_banner from './Components/Navbar/Assets/Frontend_Assets/banner_women.png'
import Kids_banner from './Components/Navbar/Assets/Frontend_Assets/banner_kids.png'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar/>
           <Routes>
               <Route path='/' element={<Shop/>}/>
               <Route path='/man' element={<ShopCategory banner={man_banner} category="man"/>}/>
               <Route path='/woman' element={<ShopCategory banner={Woman_banner}  category="woman"/>}/>
               <Route path='/Kids' element={<ShopCategory banner={Kids_banner}  category="kid"/>}/>

               <Route path='/product' element={<Product/>}>
                   <Route path=':productId' element={<Product/>}/>
               </Route>
               <Route path='/cart' element={<Cart/>}/>
               <Route path='/login' element={<LoginSignUp/>}/>
           </Routes>
         <Footer/>  
       </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "./HomePage/HomePage";
import ProductDetails from "./ProductDetails";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Layout/>}>
           <Route index element={<HomePage/>}/>
           <Route path ="ProductDetails" element={<ProductDetails/>}/>
         </Route>
         </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;
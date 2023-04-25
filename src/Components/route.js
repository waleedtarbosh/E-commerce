import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "./HomePage/HomePage";
import Details from "./ProductDetails/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ProductDetails" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
